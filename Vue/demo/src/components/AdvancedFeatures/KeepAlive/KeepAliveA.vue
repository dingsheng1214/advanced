<template>
  <div>KeepAlive-A</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    console.log('mounted A')
  },
  destroyed() {
    console.log('destroyed A')
  },
}
</script>
