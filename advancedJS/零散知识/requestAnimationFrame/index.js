/**
 * 要想动画流畅,更新频率要60帧/s, 即16.67ms更新一次视图
 * setTimeout要手动控制频率,而RAF浏览器会自动控制
 * 后台标签或隐藏iframe中,RAF会暂停,而setTimeout依然执行
 */

// 3s把宽度从100px 变为 640px, 即增加540px
// 60帧/s, 3s 180帧, 每帧变化 3px

const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
let curWidth = 100
const maxWidth = 640

// setTimeout
function animate() {
  curWidth = curWidth + 3
  div1.style.width = `${curWidth}px`
  if (curWidth < maxWidth) {
    setTimeout(animate, 16.67)
  }
}
animate()

// RAF
function animate_raf() {
  curWidth = curWidth + 3
  div2.style.width = `${curWidth}px`
  if (curWidth < maxWidth) {
    window.requestAnimationFrame(animate_raf) // 时间不用自己控制,浏览器会帮你控制
  }
}
animate_raf()
