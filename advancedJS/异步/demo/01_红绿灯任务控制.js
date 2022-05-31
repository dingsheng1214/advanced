/**
 * 题目： 红灯3s亮一次，绿灯1s亮一次，黄灯2s亮一次，如何让3个灯不断交替重复的亮呢？
 */
const task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(light)
      resolve()
    }, timer)
  })
}



const asyncTask = async () => {
  await task(3000, 'red')
  await task(1000, 'green')
  await task(2000, 'yellow')
  await asyncTask()
}

asyncTask()