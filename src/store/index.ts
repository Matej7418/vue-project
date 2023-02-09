import { createStore } from 'vuex'
import { ref } from 'vue'

export default createStore({
  state: {
    session: ref()
  },
  getters: {
  },
  mutations: {
    setSession(state, session) {
      state.session.value = session;
    }
  },
  actions: {
  },
  modules: {
  }
})
