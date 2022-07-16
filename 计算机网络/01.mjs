import fetch from 'node-fetch'

// 指数补偿 (Exponential Backoff)
/**
 * 0ms
 * 200ms
 * 400ms
 * 800ms
 * 1600ms
 * 3200ms
 */
function exponentialBackOff(url) {
  let resolved = false
  let t = 1
  let timer
  function doRetry() {
    if(resolved || t > 16) return
    console.log(`Retrying ${url} in ${t * 200}ms`);
    t *= 2
    fetch(url).then(res => {
      console.log(`Successfully fetched ${url}`);
      resolved = true
      clearTimeout(timer)
    })
  }

  timer = setTimeout(() => {
    doRetry()
  }, t * 200)

  doRetry()
}

exponentialBackOff('https://www.zhihu.com')