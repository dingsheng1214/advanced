<template>
  <div>
    LifeCycle
    <button @click="ab = !ab">切换AB</button>
    <l-a v-if="ab"></l-a>
  </div>
</template>

<script>
import LifeCycleA from './LifeCycleA.vue'
export default {
  components: {
    'l-a': LifeCycleA
  },
  data() {
    return {
      ab: true
    }
  }
}
</script>

<style>

</style>