const express = require('express');
const path = require('path');

const app = express()

app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'))
})
app.get('/cache', (req, res) => {
  console.log('收到请求...');
  // res.set('Cache-Control', 'max-age=600')
  res.send('Hello World! heihei')
})

app.listen(3000)