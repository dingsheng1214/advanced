// 1 1 2 3 5 8
const caches = new Map()

function fibWithCache(n) {
  if (caches.has(n)) {
    return caches.get(n)
  } else {
    // 递归的终止条件
    if (n === 1 || n === 2) {
      return n
    }
    const result = fibWithCache(n - 1) + fibWithCache(n - 2)
    caches.set(n, result)
    return result
  }
}

function fib(n) {
  // 递归的终止条件
  if (n === 1 || n === 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

function time(fn) {
  const start = Date.now()
  fn()
  const end = Date.now()
  console.log(end - start)
}

time(() => {
  console.log('fib', fib(45))
})

time(() => {
  console.log('fibWithCache', fibWithCache(45))
})