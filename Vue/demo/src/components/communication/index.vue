<template>
  <div style="border: 1px solid red">
    <div style="border: 1px solid orange; margin-top: 20px">
      <p>子组件通知父组件</p>
      <p>{{ count }}</p>
      <button @click="add">add 1</button>
      <div style="display: flex">
        <Child1 />
        <Child2 @add="add" />
      </div>
    </div>

    <div style="border: 1px solid orange; margin-top: 20px">
      <p>父组件通知子组件</p>
      <div>
        <button @click="addChild3">addChild3</button>
        <p>
          this.$refs['ref name']可以获取子组件实例,从而调用子组件的属性与方法
        </p>
        <Child3 ref="child3" />
      </div>
    </div>
  </div>
</template>
<script>
import event from './event'
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import Child3 from './Child3.vue'
export default {
  components: {
    Child1,
    Child2,
    Child3,
  },
  data() {
    return {
      count: 1,
    }
  },
  mounted() {
    event.$on('add', this.add)
  },
  methods: {
    add() {
      this.count += 1
    },
    addChild3() {
      this.$refs.child3.add()
    },
  },
}
</script>
