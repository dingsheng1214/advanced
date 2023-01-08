import {createServer} from 'http'
import Chance from 'chance'

const chance = new Chance()

const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })
  while (chance.bool({likelihood: 95})) {
    res.write(
      `${chance.string({
        length: 16 * 1024 - 1,
      })}\n`
    )
  }
  res.end('end...\n\n')
  res.on('finish', () => {
    console.log('all data sen...')
  })
})
server.listen(8080, () => {
  console.log('server listening on port 8080...')
})
