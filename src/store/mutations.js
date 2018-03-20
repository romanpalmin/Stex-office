import * as mTypes from './mutations-types'

export default {
  [mTypes.SET_MENU] (state, payload) {
    state.menu = payload.value
  },
  [mTypes.SET_FAQ] (state, payload) {
    state.faqs = payload.value
  },
  [mTypes.SET_USER] (state, payload) {
    console.log(payload.value)
    state.user = payload.value
  },
  [mTypes.SET_LANGUAGE] (state, payload) {
    state.settings.lang = payload.value
  }
}
