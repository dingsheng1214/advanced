/**
 * 防抖：等用户高频事件完了，再进行事件的操作
 *      比如监听输入框的输入，不应该每次都去触发监听，应该在用户完成一段输入后，再进行触发
 *
        +--------------+     +---------------+     +------------------------+     +-----------------------+
        |              |     |               |     | if event toggle again, |     |                       |
        | toggle event |     | start a Timer |     |    clear old Timer,    |     | timeout execute event |
        |              | --> |               | --> |  and set a new Timer   | --> |                       |
        +--------------+     +---------------+     +------------------------+     +-----------------------+
 *
 */
function debounce(fn, delay) {
  let timer = null
  // 闭包
  return function (...args) {
    const context = this
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

/**
 * 节流：某个操作希望上一次的完成后再进行下一次，或者说希望隔一段事件触发一次
 *      比如一个按钮，第一次点击后发送请求，等请求完成后，才能发起第二次请求
 */
function throttle(fn, delay) {
  let lock = false
  return function() {
    if(!lock) {
      setTimeout(() => {
        fn.apply(this, arguments)
        lock = false
      }, delay)
      lock = true
    }
  }
}


/**
 * 防抖 vs 节流
 *
 * 相同点: 阻止触发高频操作，从而避免性能浪费
 * 不同的：
 *  防抖：允许你多次触发，但是一段时间内只允许一次上校。适用于只需要一次触发生效的场景。
 *  节流：让你的操作每隔一段时间才能触发一次，适用于我们多次触发要多次生效的场景。
 */