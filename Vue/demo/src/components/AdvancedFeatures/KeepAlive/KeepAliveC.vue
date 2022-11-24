<template>
  <div>KeepAlive-C</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('mounted C')
  },
  destroyed() {
    console.log('destroyed C')
  },
}
</script>
