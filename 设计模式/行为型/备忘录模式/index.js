/**
 * 记录对象内部的状态，当有需要时回滚到之前的状态或者方便对象使用
 */
function Memento() {
  const cache = {}
  return function(cacheName) {
    if(cache[cacheName]) {
      return cache[cacheName]
    }else {
      cache[cacheName] = {}
    }
  }
}
const memento = new Memento()
menubar('xxx')