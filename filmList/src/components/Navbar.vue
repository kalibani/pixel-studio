<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
      <router-link class="navbar-brand" :to="{ name: 'Home', params: {} }">
        STUDIO GHIBLI
      </router-link>
      <div class="">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'films' }" class="nav-link">Films</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
