<template>
  <div>
    <input type="text" :value="count" />
    <button @click="add">add</button>
    <slot>默认插槽</slot>
    <slot name="header">
      <div>具名插槽header的默认展示内容</div>
    </slot>

    <slot name="body" :add="add">
      <div>具名插槽body的默认展示内容</div>
    </slot>

    <slot name="footer">
      <div>具名插槽footer的默认展示内容</div>
    </slot>
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
