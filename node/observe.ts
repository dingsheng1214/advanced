class Observer {
  private channels: Map<string, Array<() => void>>
  constructor() {
    this.channels = new Map()
  }

  subscribe(channel: string, cb: () => void) {
    if (this.channels.has(channel)) {
      this.channels.get(channel)?.push(cb)
    } else {
      this.channels.set(channel, [cb])
    }
    console.log(this.channels)
  }

  notify(channel: string) {
    if (this.channels.has(channel)) {
      this.channels.get(channel)?.forEach((cb) => cb())
    }
  }
}

const observer = new Observer()

observer.subscribe('hello', () => {
  console.log(1)
})

observer.subscribe('hello', () => {
  console.log(2)
})

observer.notify('hello')
