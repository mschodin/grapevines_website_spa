/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var cors = require('cors')
var nodemailer = require('nodemailer')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var options = {
  origin: 'https://wwww.thegrapevinesband.com',
  credentials: true,
};

app.use(cors(options));



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thegrapevineguys@gmail.com',
    pass: 'buffalojoes'
  }
});



/**********************
 * Example get method *
 **********************/

app.get('/simple', cors(), function(req, res) {
  // Add your code here
  res.header("Access-Control-Allow-Origin", "*");
  res.json({success: 'get call succeed!', url: req.url});
});

app.get('/simple/*', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});

/****************************
* Example post method *
****************************/

app.post('/simple', cors(), function(req, res) {
  // Add your code here
  const name = req.body.name;
  const email = req.body.email;
  const subject = 'Website submission';
  const message = req.body.message;

  var mailOpotions = {
    from: 'thegrapevineguys@gmail.com',
    to: 'thegrapevineguys@gmail.com',
    subject: subject,
    text: message
  };

  res.header("Access-Control-Allow-Origin", "*");
  transporter.sendMail(mailOpotions, function(error, info){
    if ( error ) {
      res.sendStatus(351);
    } else {
      res.sendStatus(200);
    }
  });


  res.json({success: 'post call succeed!', url: req.url, body: req.body});
});

app.post('/simple/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/simple', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/simple/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/simple', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/simple/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
