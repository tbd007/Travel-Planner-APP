var path = require("path");
// Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));
// Spin up the server
const port = 3000;
const server = app.listen(port,()=>{
    console.log('server running');
    console.log(`running on localhost:${port}`)
});

app.get('/',function(req,res){
  res.sendFile('dist/index.html')
})






  






