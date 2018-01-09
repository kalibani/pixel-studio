<template>
  <div id="app">
    <appNavbar></appNavbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    appNavbar: Navbar
  }
}
</script>

<style>

</style>
