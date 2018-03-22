// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuex from 'vuex'
import store from './store'
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

Vue.use(AnimatedVue)
Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
  mounted () {
    console.log('Start app')
    this.$store.dispatch('LOAD_MENU')
    this.$store.dispatch('LOAD_FAQ')
    this.$store.dispatch('LOAD_USER')
  },
  created () {
    Aos.init()
  }
})
