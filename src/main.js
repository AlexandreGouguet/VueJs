import Vue from 'vue' //librairie "vue" dans node_modules
import app from './app.vue' //fichier app.vue local
import MovieItemComponent from './components/movieitem.vue'
import Index from './pages/index.vue'
import MovieShow from './pages/movieshow.vue'
import MovieEdit from './pages/movieedit.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
Vue.use(VueRouter);

window.movies = [
  {
      id: 0,
      title: "L'étrange noël de M. Jack",
      year: 1994,
      synopsys: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween.",
      detailsdisplay: false
  },
  {
      id: 1,
      title: "Interstellar",
      year: 2014,
      synopsys: "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver.",
      detailsdisplay: false
  }
]

Vue.component('movie-item', MovieItemComponent);

const routes = [
  { path: '/', component: Index },
  { path: '/show/:id', component: MovieShow },
  { path: '/edit/:id', component: MovieEdit }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(app)
})