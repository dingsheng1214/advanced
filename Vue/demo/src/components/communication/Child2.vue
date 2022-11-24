<template>
  <div style="border: 1px solid blue; display: inline-block">
    <h2>$emit</h2>
    <button @click="emit">this.$emit</button>
    <button @click="emit2">自定义事件 event.$emit</button>
    <ul>
      <li>this.$emit 调用父组件传递的方法</li>
      <li style="display: flex; flex-direction: column">
        <p>Vue 本身就提供了自定义事件的能力, 创建一个 new Vue()作为event</p>
        <pre> event: export default new Vue() </pre>
        子组件:
        <pre> event.$emit('add') </pre>
        父组件:
        <pre>
        mounted() { event.$on('add', this.add) },
        beforeDestroy() { event.$off('add', this.add) }
        </pre>
      </li>
    </ul>
  </div>
</template>
<script>
import event from './event'
export default {
  data() {
    return {}
  },
  methods: {
    add() {
      this.$parent.add()
    },
    emit() {
      this.$emit('add')
    },
    emit2() {
      event.$emit('add')
    },
  },
}
</script>
