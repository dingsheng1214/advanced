<template>
  <div>
    <ul>
      <li>缓存组件, 不会destroy</li>
      <li>频繁切换,不需要重复渲染</li>
    </ul>

    <div>
      <button @click="change('A')">A</button>
      <button @click="change('B')">B</button>
      <button @click="change('C')">C</button>

      <!-- <A v-if="state === 'A'" />
      <B v-if="state === 'B'" />
      <C v-if="state === 'C'" /> -->

      <keep-alive>
        <A v-if="state === 'A'" />
        <B v-if="state === 'B'" />
        <C v-if="state === 'C'" />
      </keep-alive>
      <p>{{ state }}</p>
    </div>
  </div>
</template>
<script>
import A from './KeepAliveA.vue'
import B from './KeepAliveB.vue'
import C from './KeepAliveC.vue'
export default {
  components: {
    A,
    B,
    C,
  },
  data() {
    return {
      state: 'A',
    }
  },
  methods: {
    change(state) {
      this.state = state
    },
  },
}
</script>
