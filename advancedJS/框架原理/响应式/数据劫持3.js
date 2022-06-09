let data = {
  stage: 'GitChat',
  course: {
    title: '前端开发进阶',
    author: ['ding', 'liu'],
    publish: '2017-01-01',
  },
}

const observe = (data) => {
	if (!data || typeof data !== 'object') {
		return
	}
  Object.keys(data).forEach((key) => {
    let currentValue = data[key]
		// 递归拦截
		observe(currentValue)
    Object.defineProperty(data, key, {
      get() {
				console.log(`你访问了${key}`)
        return currentValue
      },
      set(newValue) {
        currentValue = newValue
        console.log(`setting ${key} to ${newValue}`)
      },
    })
  })
}

observe(data)

// 这种猴子补丁的做法本质上就是重写原生方法，这样做不是很安全，也不优雅，那么有更好的实现方式吗？
let oldPush = Array.prototype.push
Array.prototype.push = function (...args) {
  oldPush.apply(this, args)
  console.log(`你调用了push方法`)
}
data.course.author.push('wang')
