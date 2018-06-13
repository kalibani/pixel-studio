<template>
  <div class="loader">
    <vue-loading type="spiningDubbles" color="rgb(90, 193, 221)" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
</template>

<script>
import VueLoading from 'vue-loading-template'
export default {
  components: { VueLoading }
}
</script>

<style scoped>
.loader {
  width: 100px;
  margin: 0 auto;
  padding-top: 150px;
}
</style>
