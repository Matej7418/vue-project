import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { Room, User } from '@/interface';

export interface State {
  rooms: Room[],
  users: User[],
  session: object //TODO
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    rooms: [],
    users: [],
    session: {},
  },
  getters: {
    getUser: (state) => (id: number) => {
      return state.users.filter(obj => {return obj.id === id});
    }
  },
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setSession(state, session) {
      state.session = session;
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
