class EP {
  constructor() {
    this.channels = {}
  }

  subscribe(channel, fn) {
    if (!this.channels[channel]) {
      this.channels[channel] = []
    }
    this.channels[channel].push(fn)
  }

  publish(channel, data) {
    if (!this.channels[channel]) {
      return
    }
    this.channels[channel].forEach(fn => fn(data))
  }
}

let ep = new EP()

ep.subscribe('a', data => {
  console.log(`channel: a, data1: ${data}`)
})
ep.subscribe('a', data => {
  console.log(`channel: a, data2: ${data}`)
})

ep.subscribe('b', data => {
  console.log(`channel: b, data1: ${data}`)
})

ep.publish('a', 'hello')
ep.publish('b', 'hello world')
