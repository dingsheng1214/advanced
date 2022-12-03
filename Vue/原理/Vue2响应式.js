/**
 * Vue响应式
 * 1. 组件data的数据一旦变化,立即触发视图的更新
 * 2. 实现数据驱动视图的第一步
 * 3. 核心API: vue2: Object.defineProperty  vue3: Proxy
 */

function updateView() {
  console.log('更新视图')
}
const data = {
  name: 'hello vue',
  age: 20,
  info: {
    address: 'qigndao',
  },
  nums: [1, 2, 3],
}

const oldArrayProperty = Array.prototype
const arrProp = Object.create(oldArrayProperty)
;['push', 'pop'].forEach((methodName) => {
  arrProp[methodName] = function () {
    //更新视图
    console.log('----->----->')
    updateView()
    oldArrayProperty[methodName].call(this, ...arguments)
  }
})
/**
 * Object.defineProperty 实现响应式
 * 1. 监听对象,监听数组
 * 2. 复杂对象,深度监听
 * 3. 几个缺点
 *      3.1 深度监听,需要递归w到底,一次性计算量大
 *      3.2 无法监听新增/删除属性 (Vue.set Vue.delete)
 *      3.3 无法监听数组长度变化 (Vue重写了数组的常用方法, 如push(), pop(), shift(), unshift(), slice()...)
 */
function reactive(target) {
  if (typeof target !== 'object' || typeof target === null) {
    return
  }

  if (Array.isArray(target)) {
    Object.setPrototypeOf(target, arrProp)
  }

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      let val = target[key]
      defineReactive(target, key, val)
    }
  }
}
function defineReactive(target, key, val) {
  reactive(val)
  Object.defineProperty(target, key, {
    get() {
      console.log('get', key)
      return val
    },
    set(newVal) {
      reactive(newVal)
      console.log('set', key, newVal)
      val = newVal
      updateView()
    },
  })
}

reactive(data)

data.name
data.name = 'vue hello'

data.info
data.info.address
data.info.address = 'shandong'

// 类似 Vue.set 手动添加响应式
defineReactive(data, 'value', 10)
data.value
data.value = 20

data.nums.push(4, 5)
console.log(data.nums)
