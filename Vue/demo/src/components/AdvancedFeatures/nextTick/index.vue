<template>
  <div>
    <ul ref="ul1">
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="add1">添加一项</button>
    <button @click="add2">添加一项-nextTick</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['a', 'b', 'c'],
    }
  },
  methods: {
    add1() {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      // 调用了2次push之后,list更新触发渲染,
      // 此时获取DOM 元素仍是更新之前的DOM
      const ul = this.$refs.ul1
      alert(`ul.childNodes.length : ${ul.childNodes.length}`)
      console.log(this.list)
    },
    add2() {
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      // 调用了2次push之后,list更新触发渲染,
      this.$nextTick(() => {
        // nextTick会在DOM更新后执行,因此,此时获取DOM就是更新后的DOM
        const ul = this.$refs.ul1
        alert(`ul.childNodes.length : ${ul.childNodes.length}`)
        console.log(this.list)
      })
      console.log(this.list)
    },
  },
}
</script>
