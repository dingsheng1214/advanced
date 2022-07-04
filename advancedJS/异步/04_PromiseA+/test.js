const PromiseA = require('./index')

const promise = new PromiseA((resolve, reject) => {
  // setTimeout(() => {
  resolve('success')
  // }, 1000)
})

promise.then(
  (res) => {
    console.log('onFulfilled', res)
  },
  (err) => {
    console.log('onRejected', err)
  }
)

new PromiseA((resolve, reject) => {
  // reject('失败')
  resolve('成功')
})
  .then()
  .then()
  .then(
    (data) => {
      console.log(data)
    },
    (err) => {
      console.log('err', err)
    }
  )
