import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    rooms: [],
    users: [],
  },
  getters: {
  },
  mutations: {
    setRooms(state, rooms) {
      this.rooms = rooms;
    },
    setUsers(state, users) {
      this.users = users;
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
