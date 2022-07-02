class EventHub {
  constructor() {
    this.channels = {}
  }

  subscribe(channel, cb) {
    if(!this.channels[channel]) {
      this.channels[channel] = []
    }
    this.channels[channel].push(cb)
  }

  publish(channel) {
    if(this.channels[channel]) {
      this.channels[channel].forEach(cb => {
        cb()
      })
    }
  }
}


const eventHub = new EventHub()
eventHub.subscribe('a', () => { console.log('a1')})
eventHub.subscribe('a', () => { console.log('a2')})

eventHub.subscribe('b', () => { console.log('b1')})
eventHub.subscribe('b', () => { console.log('b2')})

console.log(eventHub.channels);
eventHub.publish('a')
