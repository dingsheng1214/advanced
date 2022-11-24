<template>
  <div style="border: 1px solid blue; display: inline-block">
    <h2>$parent和$root</h2>
    <button @click="add">this.$parent</button>
    <button @click="root">this.$root</button>
    <ul>
      <li>this.$root访问当前组件的根组件</li>
      <li>this.$parent访问当前组件的父组件</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    add() {
      this.$parent.add()
    },
    root() {
      console.log(this.$root)
    },
  },
}
</script>
