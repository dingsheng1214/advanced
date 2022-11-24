<template>
  <div>
    <h2>mixin</h2>
    <ul>
      <li>多个组件有相同的逻辑, 抽离出来</li>
      <ul>
        mixin并不是完美的方案, 会有一些问题
        <li>变量来源不明确,不利于阅读</li>
        <li>多mixin可能会导致命名冲突</li>
        <li>mixin和组件可能出现多对多的关系, 复杂度较高</li>
      </ul>
      <li>Vue3的 composition API已在解决这些问题</li>
    </ul>
  </div>
</template>
<script>
import mixin from './mixin'
export default {
  mixins: [mixin],
  data() {
    return {
      name: 'hello vue',
    }
  },
  mounted() {
    console.log('Index mounted', this.name)
  },
}
</script>
