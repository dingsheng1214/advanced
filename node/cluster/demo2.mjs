import {createServer} from 'http'
import {cpus} from 'os'
import cluster from 'cluster'

// 主进程创建分支
if (cluster.isMaster) {
  const availableCpus = cpus()
  console.log(`clustering to ${availableCpus.length} process`)
  availableCpus.forEach(() => {
    cluster.fork()
  })
} else {
  // 执行实际工作
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
    console.log(`server listen on ${pid}`)
  })
}
