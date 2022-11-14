/**
 * 题目
 * 1 编写一个通用的事件,监听函数
 * 2 描述事件冒泡流程
 * 3 无限下拉的图片列表,如何监听每个图片的点击
 */

/**
 * 知识点
 * 1. 事件模型
 */

// 通用的事件绑定函数
function bindEvent(el, type, callback, capture = false) {
  el.addEventListener(type, callback, capture)
}
const p1 = document.getElementById('p1')
bindEvent(p1, 'click', (e) => {
  // e.stopPropagation()
  console.log('p1 click', e.target)
})

const div1 = document.getElementById('div1')
bindEvent(div1, 'click', (e) => {
  console.log('div1 click', e.target, e.currentTarget)
})

const body = document.body
bindEvent(body, 'click', (e) => {
  console.log('body click', e.target, e)
})

/**
 * 事件代理
 *              body
 *            /
 *      div#div2
 *     /
 * p#p21
 */
const div2 = document.getElementById('div2')
bindEvent(div2, 'click', (e) => {
  console.log('div2 click', e.target, e.currentTarget)
})
