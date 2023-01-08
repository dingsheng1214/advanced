import express from 'express'
import {pipeline} from 'stream'
import {createHash} from 'crypto'

const app = express()

app.post('/hash', (req, res) => {
  const hasher = createHash('sha512')
  hasher.setEncoding('base64')
  pipeline(req, hasher, res, (err) => {
    if (err) {
      console.log(err)
      return !res.headersSent && res.sendStatus(500)
    }
  })
})

app.listen(3000)
