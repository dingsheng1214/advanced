const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/submit', (req, res) => {
  res.sendFile(path.resolve(__dirname, './formdata/index.html'));
})

app.post('/submit', fileUpload(), (req, res) => {
  req.files.file.mv(path.resolve(__dirname, './formdata/' + req.files.file.name))
  res.status(200).send('ok');
})

app.get('/submit/base64', (req, res) => {
  res.sendFile(path.resolve(__dirname, './h5-base64/index.html'));
})
app.post('/submit/base64', express.json(), (req, res) => {
  console.log(req.body.data)
  const buffer = Buffer.from(req.body.data, 'base64');
  fs.writeFileSync(path.resolve(__dirname, './h5-base64/' + req.body.name), buffer);
  res.status(200).send('ok');
})

app.get('/submit/blob', (req, res) => {
  res.sendFile(path.resolve(__dirname, './h5-blob/index.html'));
})
app.post('/submit/blob', fileUpload(), (req, res) => {
  fs.writeFileSync(path.resolve(__dirname, './h5-blob/' + req.body.name), req.files.file.data);
  res.status(200).send('ok');
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
