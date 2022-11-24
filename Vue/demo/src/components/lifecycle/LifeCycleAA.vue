<template>
  <div style="border: 1px solid red; width: 200px">
    LifeCycleAA {{ test }}
    <p>{{ initVal }}</p>
    <input type="number" v-model="test" ref="input" />
  </div>
</template>

<script>
const {group, groupEnd, log} = console
export default {
  props: {
    initVal: {
      type: Number,
    },
  },
  data() {
    return {
      test: 1,
    }
  },
  computed: {
    bontest() {
      return this.test + 2
    },
  },
  methods: {
    getOne() {},
  },
  beforeCreate() {
    group('=== 初始化AA ===')
    log('--- beforeCreateAA ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)

    log(``)
  },
  created() {
    log('--- createdAA ---')

    // data, computed, methods 可以在 created 中使用
    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)

    log(``)
    groupEnd()
  },
  beforeMount() {
    group('=== 挂载AA ===')
    log('--- beforeMountAA ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
  },
  mounted() {
    log('--- mountedAA ---')

    // ref 可以在 mounted 中使用
    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
    groupEnd()
  },
  beforeUpdate() {
    group('=== 模板更新AA ===')
    log('--- beforeUpdateAA ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
  },
  updated() {
    log('--- updatedAA ---')

    log(`[data:test] ${this.test}`)
    log(`[computed:bontest] ${this.bontest}`)
    log(`[methods:getOne] ${this.getOne}`)
    log(`[ref:input] ${this.$refs.input}`)
    groupEnd()
  },
  activated() {
    group('=== keepAlive激活AA ===')
    log('--- activatedAA ---')
  },
  deactivated() {
    log('--- deactivatedAA ---')
    groupEnd()
  },
  beforeDestroy() {
    group('=== 卸载AA ===')
    log('--- beforeDestroyAA ---')
  },
  destroyed() {
    log('--- destroyedAA ---')
    groupEnd()
  },
}
</script>

<style></style>
