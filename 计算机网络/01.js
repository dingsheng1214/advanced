const express = require('express')

const app = express()

app.get('/301', (req, res) => {
  res.redirect(302, '/def')
})
app.get('/302', (req, res) => {
  res.redirect(302, '/def')
})
app.get('/303', (req, res) => {
  res.redirect(302, '/def')
})

app.post('/def', (req, res) => {
  res.send('def')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
