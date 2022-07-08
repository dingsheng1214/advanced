/**
 * 责任链模式（Chain of Responsibility）允许业务请求者将责任链视为一个整体并对其发起请求，而不必关心链条内部具体的业务逻辑与流程走向，
 * 也就是说，请求者不必关心具体是哪个节点起了作用，总之业务最终能得到相应的处理
 */
function Axios() {
  this.interceptor = {
    request: new Interceptor(),
    response: new Interceptor()
  }
}
Axios.prototype.request = function (config) {
  let promise = Promise.resolve()
  let chain = [dispatchEvent]

  this.interceptor.request.handlers.forEach(handler => {
    chain.unshift(handler.onFulfilled, handler.onRejected)
  })

  this.interceptor.response.handlers.forEach(handler => {
    chain.push(handler.onFulfilled, handler.onRejected)
  })

  while(chain.length) {
    promise = promise.then(chain.shift(), chain.shift())
  }
}

const axios = new Axios()
// 添加请求拦截
axios.interceptor.request.use()
// 添加响应拦截
axios.interceptor.response.use()


function Interceptor() {
  this.handlers = []
}
Interceptor.prototype.use = function (onFulfilled, onRejected) {
  this.handlers.push({
    onFulfilled,
    onRejected
  })
}