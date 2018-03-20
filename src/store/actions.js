import * as aTypes from './actions-types'
import menu from './data/menu'
import faqs from './data/faqs'
import user from './data/user'
/* import axios from 'axios'; */

export default {
  [aTypes.LOAD_MENU] ({commit}) {
    let commitPayload = {}
    commitPayload.value = menu.items
    commit('SET_MENU', commitPayload)
  },

  [aTypes.LOAD_FAQ] ({commit}) {
    let commitPayload = {}
    commitPayload.value = faqs.items
    commit('SET_FAQ', commitPayload)
  },

  [aTypes.LOAD_USER] ({commit}) {
    let commitPayload = {}
    commitPayload.value = user
    commit('SET_USER', commitPayload)
  }
}
