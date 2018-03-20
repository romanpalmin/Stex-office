import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    settings: {
      lang: 'ru'
    },
    menu: {},
    faqs: {},
    user: {
      contacts: [],
      info: {}
    }
  },
  mutations: mutations,
  actions: actions,
  getters: {
    getMenu: state => {
      return state.menu[state.settings.lang]
    },
    getFaqs: state => {
      return state.faqs[state.settings.lang]
    },
    getContacts: state => {
      return state.user.contacts.filter(item => item.show)
    }
  }
})
export default store
