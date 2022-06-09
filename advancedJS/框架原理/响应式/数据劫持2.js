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

// 你访问了course
// 你访问了author
// 问题：并没有触发 author的 setter
// 原因：Object.keys() 返回对象自身可枚举属性的数组，不包括继承的属性。
data.course.author.push('wang')