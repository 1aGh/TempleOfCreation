const express = require('express');
const app = express();
const fs = require('fs');
const compression = require('compression');
const mailer = require('express-mailer');

const PORT = process.env.PORT || 4001;

app.use(express.static('dist'));
app.use(compression({
  filter: function (req, res) {
    return true;
  }
}));
app.use(express.json());

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

mailer.extend(app, {
  from: 'info@templeofcreation.cz',
  host: 'smtp.templeofcreation.cz', // hostname
  secureConnection: false, // use SSL
  port: 587, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'info@templeofcreation.cz',
    pass: 'TemplePVPAM.6'
  }
});

app.get('/api/:id', (req, res) => {
  res.send(['Hello World!'+req.params.id]);
});

app.get('/api/getFolder/:id', (req, res) => {
  let folder = './store/images/'+req.params.id;
  fs.readdir(folder, (err, files) => {
    let filesAr = [];
    if (files) {
      files.map((file) => {
        if (file.match(/^(.*\.(jpg|jpeg|png)$)?$/)) {
          filesAr.push(file);
        }
      });
      res.send(filesAr);
    }
  });
});

app.get('/api/store/images/:folder_id/:img_id', function (req, res, next) {
  let fid = req.params.folder_id;
  let iid = req.params.img_id;
  let filepath = './store/images/'+fid+'/'+iid;
  res.sendFile(filepath, { root : './' });
});

app.post('/api/sendMail', function (req, res, next) {
  console.log('SENDMAIL:: ', req.body);
  let msg = req.body;
  app.mailer.send('email', {
    to: 'dovrtel@templeofcreation.cz',
    subject: msg.subject,
    replyTo: msg.email,
    name: msg.name,
    email: msg.email,
    message: msg.message,
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      res.status(400).send('There was an error sending the email');
      return;
    }
    res.status(200).send('Email sent');
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});