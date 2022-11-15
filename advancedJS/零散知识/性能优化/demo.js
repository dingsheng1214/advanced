function debounce(fn, delay) {
  let timer
  return (arg) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(arg)
    }, delay)
  }
}

const fn = (e) => console.log(e.target.value)
document.getElementById('input').addEventListener('input', debounce(fn, 1000))

function throttle(fn, delay = 1000) {
  let lock = false
  return function (e) {
    if (!lock) {
      lock = true
      setTimeout(() => {
        fn(e)
        lock = false
      }, delay)
    }
  }
}

const div = document.getElementById('div')
const fn1 = (e) => console.log(e.offsetX, e.offsetY)
div.addEventListener('drag', throttle(fn1, 100))
