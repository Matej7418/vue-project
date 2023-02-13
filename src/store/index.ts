import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    rooms: ["UNSET"],
    users: [],
    session: {}
  },
  getters: {
  },
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setUsers(state, users) {
      state.users = users;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
      createPersistedState()
  ]
})
