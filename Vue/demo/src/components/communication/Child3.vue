<template>
  <div style="border: 1px solid blue; display: inline-block">
    <p>子组件 child3</p>
    <input type="text" v-model="count" />
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    add() {
      this.count += 1
    },
  },
}
</script>
