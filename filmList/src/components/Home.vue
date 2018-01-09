<template>
  <div class="hello">
    <appNavbar></appNavbar>
    <div class="container">
      <div class="row">
        <div class="col-sm-4 mt-4" v-for="film in films">
          <div class="card card-inverse card-info">
            <img class="card-img-top" src="http://success-at-work.com/wp-content/uploads/2015/04/free-stock-photos.gif">
            <div class="card-block">
              <figure class="profile">
                <img src="http://success-at-work.com/wp-content/uploads/2015/04/free-stock-photos.gif" class="profile-avatar" alt="">
              </figure>
              <router-link :to="film.url">
                <h4 class="card-title mt-3">{{film.title}}</h4>
              </router-link>
                <div class="meta card-text">
                  Director : <a>{{film.director}}</a>
                </div>
                <div class="meta card-text">
                  Producer : <a>{{film.producer}}</a>
                </div>
                <div class="meta card-text">
                  Release : <a>{{film.release_date}}</a>
                </div>
                <div class="card-text">
                  Description : {{film.description}}
                </div>
            </div>
            <div class="card-footer">
              Rating : <small>{{film.rt_score}}</small>
              <button class="btn btn-info float-right btn-sm">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import { mapActions, mapState } from 'vuex'
export default {
  components:{
    appNavbar: Navbar
  },

  computed:{
    ...mapState([
      'films'
    ])
  },

  created(){
    this.getAllFilms()
  },

  methods:{
    ...mapActions(['getAllFilms'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/films.css";
</style>
