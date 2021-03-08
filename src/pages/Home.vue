<template>
  <h1 class="text-blue-400 text-2xl text-center">Hello world</h1>
</template>
<script>
export default {
  methods: {
    async getData() {
      const res = this.$fetchData('/', {})
      console.log(res)
    },
  },
  created() {
    this.getData()
  },
}
</script>
