<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10 mt-4">
        <div class="card mb-4">
            <img class="card-img-top" src="https://img.duniaku.net/2017/03/studio-ghibli-1.jpg" alt="Card image cap">
            <div class="card-body">
              <div class="" style="float:right">
                <strong>Rating Score</strong> : <a>{{film.rt_score}}</a>
              </div>
              <h2 class="card-title">{{film.title}}</h2>
              <div >
                <strong>Director</strong> : <a>{{film.director}}</a>
              </div>
              <div >
                <strong>Producer</strong> : <a>{{film.producer}}</a>
              </div>
              <p class="card-text">{{film.description}}</p>
            </div>
            <div class="card-footer text-muted">
              Year Release : {{film.release_date}}
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
      'film'
    ])
  },

  watch: {
   '$route' (to, from) {
     this.getFilmById(this.$route.params.id)
    }
  },

  created(){
    this.getFilmById(this.$route.params.id)
  },

  methods:{
    ...mapActions([
      'getFilmById'
    ])
  }
}
</script>

<style lang="css">
</style>
