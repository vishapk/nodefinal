const express = require('express');
const multer = require('multer');
const cors = require('cors');
const {PythonShell} = require('python-shell');

const PORT = process.env.PORT || 3001;

const app = express();
const upload= multer();
var pbody= "Cooking up your Summary";

app.use(upload.array()); 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {

  var allowedDomains = ['http://localhost:3000','http://localhost:8080' ];
  var origin = req.headers.origin;
  if(allowedDomains.indexOf(origin) > -1){
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Accept');
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
})
app.post('/postSum', callPythonScript);

function callPythonScript(req, res) {
      
  var summary="";

  const {spawn} = require("child_process");
  console.log(req.body.patentbody);
    
  var python = spawn('python',["C:/projectfinal/reactnode/server/scripts/inference.py",
      req.body.patentbody] );

  python.stdout.on('data', (data) => {
    console.log("Completed Summarization");
    summary=data.toString();
    console.log(data);
    res.json({sbody: summary});
  } );
    
  python.stderr.on('data', (data) => {
    console.log(`error:${data}`);
  });
  
}
  
app.get('/', (req, res) => {
  res.send('Hello World!')
})
/*
app.post  ("/api", (req, res) => {
  
  const { name } = req.body;
  console.log(name);
  res.json({summary: });
});
*/

app.post("/api", callPythonScript);

function callPythonScript(req, res) {
      
  const { name } = req.body;
  //console.log(name);

  const {spawn} = require("child_process");
  console.log("\n\n\nBeginning Summarization\n\n\n\n");
    
  var python = spawn('python',["C:/projectfinal/reactnode/server/scripts/inference.py",
      name] );

  python.stdout.on('data', (data) => {
    console.log("Completed Summarization");
    var summarizedP=data.toString();
    console.log(summarizedP);
    res.json({summary: summarizedP});
  } );
    
  python.stderr.on('data', (data) => {
    console.log(`error:${data}`);
  });
  
}

const path = require('path');

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});