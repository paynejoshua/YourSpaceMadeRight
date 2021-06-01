// const path = require('path');
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', (req, res) => {
// res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.listen(port, () => {
// console.log('Server is up!');
// });

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const password = require("./secrets")
const bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.post('/email', (req, res) => {
    console.log("Here babay")    
    
    // For Google: 
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
        port: 465,
        secure: true,
        auth: {
          user: 'yourspacemaderight@gmail.com',
          pass: password.ysmr
        },
        debug: true,
        logger: true,

      });

      transporter.verify(function(error, success) {
        if (error) {
             console.log(error);
        } else {
             console.log('Server is ready to take our messages');
        }
     });
      
      var mailOptions = {
        from: req.body.email,
        to: 'yourspacemaderight@gmail.com',
        subject: `New email from ${req.body.name}`,
        text: req.body.message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("server error", error);
          res.status(400)
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200);
        }
      });
    
    

});



