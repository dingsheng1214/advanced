<template>
  <div>
    异步组件
    <ul>
      <li>import()函数</li>
      <li>按需加载,异步加载大组件</li>
    </ul>

    <div style="border: 1px solid red">
      <p style="color: red">
        打开 chrome开发者工具 的network,观察首次点击button后会加载一js文件
      </p>
      <Demo v-if="showDemo" />
      <button @click="showDemo = !showDemo">切换显示</button>
    </div>
  </div>
</template>
<script>
// import Demo from './demo.vue'
export default {
  components: {
    // Demo,
    Demo: () => import('./demo.vue'),
  },
  data() {
    return {
      showDemo: false,
    }
  },
}
</script>
