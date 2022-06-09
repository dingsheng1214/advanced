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
    if (typeof currentValue === 'object') {
      data[key] = new Proxy(currentValue, {
        get(target, key, receiver) {
          console.log(`你访问了${key}`)
          return Reflect.get(target, key, receiver)
        },
        set(target, key, value) {
          if (key !== 'length') {
            console.log(`setting ${key} to ${value}`)
          }
          return Reflect.set(target, key, value)
        },
      })
    } else {
      Object.defineProperty(data, key, {
        get() {
          console.log(`你访问了${key}`)
          return currentValue
        },
        set(newValue) {
          currentValue = newValue
          console.log(`setting2 ${key} to ${newValue}`)
        },
      })
    }
  })
}

observe(data)

data.course.author[0] = 'wang'
// data.course.author.push('wang')
