<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="wrap">
          <h1 class="form-title">
          Studio Ghilbi Welcome
          <img class="img" src="https://s-media-cache-ak0.pinimg.com/originals/49/88/52/4988527c382a3715ad219591ff30c7bd.jpg" alt="" />
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components:{
    appNavbar: Navbar
  }
}
</script>

<style scoped="" lang="css">
  .container {
    margin-top: 60px;

  }

  h1 {
    text-align: center;
  },

  .img {
    margin: auto;
  }
</style>
