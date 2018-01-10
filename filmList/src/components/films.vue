<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 mt-4" v-for="film in films">
          <div class="card card-inverse card-info">
            <img class="card-img-top" src="https://img00.deviantart.net/fae6/i/2013/098/0/8/studio_ghibli_stickers_by_keicea-d3e2me1.png">
            <div class="card-block">
              <figure class="profile">
                <img src="https://i.ebayimg.com/images/g/GIgAAOSwvApaFTIA/s-l300.jpg" class="profile-avatar" alt="">
              </figure>
                <h4 class="card-title mt-3"><a>{{film.title}}</a></h4>
                <div class="meta card-text">
                  <strong>Director</strong> : <a>{{film.director}}</a>
                </div>
                <div class="meta card-text">
                  <strong>Producer</strong> : <a>{{film.producer}}</a>
                </div>
                <div class="meta card-text">
                  <strong>Release</strong> : <a>{{film.release_date}}</a>
                </div>
                <div class="card-text">
                  <strong>Description</strong> : {{film.description}}
                </div>
            </div>
            <div class="card-footer">
              Rating : <small>{{film.rt_score}}</small>
              <router-link :to="{ name: 'filmDetail', params: { id:film.id } }">
                <button class="btn btn-info float-right btn-sm">Details</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed:{
    ...mapState([
      'films'
    ])
  },

  created(){
    this.getAllFilms()
  },

  methods:{
    ...mapActions([
      'getAllFilms'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/films.css";
</style>
