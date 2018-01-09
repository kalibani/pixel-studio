import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import films from '@/components/films'
import filmDetail from '@/components/filmDetail'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/films',
      name: 'films',
      component: films
    },
    {
      path: '/film/:id',
      name: 'filmDetail',
      component: filmDetail,
      props: true
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
