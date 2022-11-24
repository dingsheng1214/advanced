<template>
  <div>
    <h2>slot</h2>
    <SlotDemo>
      <div>默认插槽---哈哈哈</div>
      <template #header>
        <div>具名插槽header填充内容</div>
      </template>

      <template #body="{add}">
        <button @click="add">作用域插槽 -- 调用插槽内的add方法</button>
      </template>
    </SlotDemo>
  </div>
</template>
<script>
import SlotDemo from './SlotDemo.vue'
export default {
  components: {SlotDemo},
  data() {
    return {}
  },
}
</script>
