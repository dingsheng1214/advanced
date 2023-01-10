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

  cluster.on('exit', (worker, code) => {
    // code !==0 表示该进程因错误而退出
    // exitedAfterDisconnect = false 表示该进程不是主进程故意叫停的
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`
        worker ${worker.process.pid} crashed. starting a new worker
      `)
      cluster.fork()
    }
  })
} else {
  // 模拟崩溃-- 工作进程所启动的服务器,会在经过1-3秒后崩溃
  setTimeout(() => {
    throw new Error('Ooops')
  }, Math.ceil(Math.random() * 3) * 100)

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
