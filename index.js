//in app.js
var express = require("express");
var app = express();
app.use(express.json()); //sends requests in json

const test = require('./database.js');
const  router = require('./Routes/routes.js')

app.listen(3000, function(){
  console.log("Application started and Listening on port 3000");
  });

const rts = router;
app.use("/", rts);
