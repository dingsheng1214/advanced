<template>
  <div v-resize:[direction].quiet="onResize">window width is: {{ length }}</div>
</template>

<script>
/**
 * 1 v-resize指令， 监听浏览器窗口大小改变的时候，通过 监听函数 onResize 响应
 * 2 v-resize:[direction] 通过direction 监听页面高度或宽度的变化
 * 3 可以通过修饰符.quiet 来控制是否在指令初始化的时候 响应 onResize
 */
export default {
  directives: {
    resize: {
      bind(el, binding, vnode) {
        console.log('bind', el, binding, vnode)
      },
      inserted(el, binding, vnode) {
        console.log('inserted', el, binding, vnode)

        const { value: callback, arg: direction, modifiers: {quiet}} = binding
        const result = () => {
          return direction === 'vertical' ? window.innerHeight : window.innerWidth
        }

        if (quiet) {
          callback(result())
        }

        window.addEventListener('resize', () => {
          callback(result())
        })
        el._onResize = callback
      },
      update(el, binding, vnode) {
        console.log('update', el, binding, vnode)
      },
      componentUpdated(el, binding, vnode) {
        console.log('componentUpdated', el, binding, vnode)
      },
      unbind(el, binding, vnode) {
        console.log('unbind', el, binding, vnode)
        if (el._onResize) {
          window.removeEventListener('resize', el._onResize)
          delete el._onResize
        }
      }
    }
  },
  data() {
    return {
      length: 0,
      direction: 'vertical'
    }
  },
  methods: {
    onResize(length) {
      console.log('onResize', length);
      this.length = length
    }
  }
}
</script>

<style>

</style>