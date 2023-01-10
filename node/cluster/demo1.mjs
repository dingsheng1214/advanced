import {createServer} from 'http'

const {pid} = process

const server = createServer((req, res) => {
  let i = 10e7
  while (i > 0) {
    i--
  }
  console.log(`handling request from ${pid}`)
  res.end(`hello from ${pid}`)
})

server.listen(8080, () => {
  console.log(`server listen on 8080...`)
})
