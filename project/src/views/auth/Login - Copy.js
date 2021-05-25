import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  
  return (
    <>
    
      <div className="container mx-auto px-4 h-full max-w-md">
        <div className="flex content-center items-center justify-center h-full max-w-md">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative flex flex-col break-words max-w-md mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Search Patent with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 zoom"
                    type="button" 
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg")}
                    />
                    <a href="https://patents.google.com/" target="blank">Google Patents</a>
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-100 text-center mb-3 font-bold">
                  Paste descrption of the Patent below
                </div>
                <form action="/postsub" method="post" target="blank">
                <div className="relative w-full mb-3 float:left w-200">
                    <textarea
                      id="patentbody"
                      name="patentbody"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 autoresizing"
                      rows="6" placeholder="Patent body"
                    />
                  </div>
                  
                  <div className="text-center mt-6">
                  
                    <input
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Summarize"
                      /
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
