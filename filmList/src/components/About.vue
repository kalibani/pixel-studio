<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Studio Ghibli API</h1>
        <p>The Studio Ghibli API catalogs the people, places, and things found in the worlds of Ghibli. It was created to help users discover resources, consume them via HTTP requests, and interact with them in whatever way makes sense. Navigation can be found on the left sidebar, and the right sidebar shows examples of returned objects for successful calls.
        Users can raise an issue, ask for help, or find a contribution guide at the main repo: https://github.com/janaipakos/ghibliapi</p>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components :{
    appNavbar : Navbar
  }

}
</script>

<style scoped="">
.container {
  margin-top: 30px;
}
</style>
