const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const config = require('../../secrets')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'dist/nadavsProtfolio')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.post('/sendEmail', (req, res) => {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.emailAddress,
      pass: config.emailPassword
    }
  });

  var mailOptions = {
    from: req.body.name,
    to: 'nadavnbs@gmail.com',
    subject: req.body.title,
    html: '<h2>' + req.body.title + '</h2>' +
      '<p>' + req.body.text + '</p>' +
      '<p><b>Name: </b>' + req.body.name + '<p>' +
      '<p><b>Email: </b>' + req.body.email + '<p>'

  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send({
    success: true,
    message: 'Emails sent',
  });

});
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/nadavsProtfolio/index.html'))
});

app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500).send('Smoting broke')
});

const port = process.env.PORT || 3000;
app.set('port',port);
const server = http.createServer(app);
server.listen(port,()=>console.log(`API running on localhost:${port}`));
module.exports = app;
