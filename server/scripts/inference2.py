"""Script to perform inference"""

"""imports"""
from transformers import PegasusForConditionalGeneration, PegasusTokenizer
import torch
import json
import sys
import os

def main(source_text):
    
    fob=open("newfile.txt","wb")
    fob.close()

    try:
        source_text = [str(source_text)]
        model_name = 'google/pegasus-xsum'
        torch_device = 'cuda' if torch.cuda.is_available() else 'cpu'
        tokenizer = PegasusTokenizer.from_pretrained(model_name)
        model = PegasusForConditionalGeneration.from_pretrained(model_name)
        batch = tokenizer(source_text,
                          truncation = True,
                          padding = 'longest',
                          return_tensors = 'pt'
                         ).to(torch_device)
        translated = model.generate(**batch)
        generated_summary = tokenizer.batch_decode(translated,
                                          skip_special_tokens = True
                                         )
        final_summary="".join(generated_summary)
        return final_summary
    
    except Exception as e:
        res = dict({'message' : str(e)})
        return res
        

if __name__ == '__main__':
    result = main(sys.argv[1])
    print(result)
    sys.stdout.flush()
