const express = require("express");
const apiRouter = require('./router');
const path = require("path");
var cors = require('cors');

const app = express(); // create express app
//enable body payload
app.use(cors());
app.use(express.json());
//fixing cros error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

//use middleware, inform Express.js to serve all the files from public folder
//otherwise cannot serve for json,image and css file
app.use(express.static('public'));

//use the routers defined in router.js
app.use(apiRouter);
// start express server on port 5000

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});