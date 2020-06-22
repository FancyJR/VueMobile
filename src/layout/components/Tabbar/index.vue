<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0
    }
  },
  mounted() {},
  methods: {
    change(v) {
      if (v === 0) {
        this.$router.push('/applicationManage/application')
      }
      if (v === 1) {
        this.$router.push('/unitProjectManage/unit')
      }
      if (v === 2) {
        this.$router.push('/myManage/my')
      }
    }
  }
}
</script>

<template src="./index.html"></template>
<style src="./index.scss" lang="scss"></style>
