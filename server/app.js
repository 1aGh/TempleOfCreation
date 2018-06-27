const express = require('express');
const app = express();
const fs = require('fs');
var compression = require('compression')

const PORT = process.env.PORT || 4001;

app.use(express.static('dist'));
app.use(compression({
  filter: function (req, res) {
    return true;
  }
}));

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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});