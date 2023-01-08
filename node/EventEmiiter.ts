import {EventEmitter} from 'events'

const emitter = new EventEmitter()

emitter.on('hello', () => {
  console.log('1')
})
emitter.on('hello', () => {
  console.log(2)
})

emitter.emit('hello')
