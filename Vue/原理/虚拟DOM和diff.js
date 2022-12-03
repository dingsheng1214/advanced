/**
 * 1. DOM操作非常耗费性能
 * 2. 以前用jQuery,可以自行控制DOM操作的时机,手动调整
 * 3. Vue和React是数据驱动视图, 数据变动后是如何驱动DOM变更的?
 *
 * 解决方案-vdom
 * vdom 用JS模拟DOM结构,通过diff算法计算出最小的变更,操作DOM
 */
const dom = `
  <div id="div1" class="container">
    <p>vdom</p>
    <ul style="font-size: 20px">
      <li>a</li>
    </ul>
  </div>
`
const vdom = {
  type: 'div',
  props: {
    id: 'div1',
    class: 'container',
  },
  children: [
    {
      type: 'p',
      children: ['dom'],
    },
    {
      type: 'ul',
      props: {
        style: 'font-size: 20px',
      },
      children: [
        {
          type: 'li',
          children: ['a'],
        },
      ],
    },
  ],
}

/**
 * diff算法概述
 * 1. diff即对比, 是一个广泛的概念, 如 linux diff命令, git diff等
 * 2. 两个js对象也可以做diff, 如: https://github.com/cujojs/jiff
 * 3. 两棵树做diff, 如 vdom的diff
 *
 * vdom的diff
 * 1. 只比较同一层级, 不跨级比较
 * 2. tag不相同,则直接删掉重建, 不再深度比较
 * 3. tag和key, 两者都相同,则认为是相同节点,不再深度比较
 */
