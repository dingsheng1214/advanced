let data = {
    stage: 'GitChat',
    course: {
        title: '前端开发进阶',
        author: 'ding',
        publish: '2017-01-01',
    }
}

Object.keys(data).forEach(key => {
    let currentValue = data[key]
    Object.defineProperty(data, key, {
        get() {
            console.log(`你访问了${key}`);
            return currentValue
        },
        set(newValue) {
            currentValue = newValue
            console.log(`setting ${key} to ${newValue}`);
        }
    })
})
// 问题：只触发了getter，没有触发setter
data.course.title = 'ding'