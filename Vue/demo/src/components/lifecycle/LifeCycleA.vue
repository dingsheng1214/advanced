<template>
  <div>
    LifeCycleA {{ test }}
    <input type="number" v-model="test" ref="input">
  </div>
</template>

<script>
const { group, groupEnd, log } = console;
export default {
  data() {
    return {
      test: 1
    }
  },
  computed: {
    bontest() {
      return this.test + 2
    }
  },
  methods: {
    getOne() {}
  },
  beforeCreate() {
    group('=== 初始化 ===')
    log('--- beforeCreate ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)

    log(``)
  },
  created() {
    log('--- created ---')

    // data, computed, methods 可以在 created 中使用
    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)

    log(``)
    groupEnd()
  },
  beforeMount() {
    group('=== 挂载 ===')
    log('--- beforeMount ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
  },
  mounted() {
    log('--- mounted ---')

    // ref 可以在 mounted 中使用
    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
    groupEnd()
  },
  beforeUpdate() {
    group('=== 模板更新 ===')
    log('--- beforeUpdate ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
  },
  updated() {
    log('--- updated ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
    groupEnd()
  },
  activated() {
    group('=== keepAlive激活 ===')
    log('--- activated ---')
  },
  deactivated() {
    log('--- deactivated ---')
    groupEnd()
  },
  beforeDestroy() {
    group('=== 卸载 ===')
    log('--- beforeDestroy ---')
  },
  destroyed() {
    log('--- destroyed ---')
    groupEnd()
  }
}
</script>

<style>

</style>