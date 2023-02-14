import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { Room, User, Session } from '@/interface';

export interface State {
  rooms: Room[],
  users: User[],
  session: Session //TODO
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    rooms: [],
    users: [],
    session: new Session(2)
  },
  getters: {
    getUser: (state) => (id: number) => {
      return state.users.filter(obj => {return obj.id === id});
    },
    getCurrentUser(state) {
      return state.users.filter(obj => {return obj.id === state.session.userId});
    }
  },
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setUsers(state, users) {
      state.users = []
      for(let user in users) {
        state.users.push(new User(user.id,))
      }
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

export function useStore() {
  return baseUseStore(key)
}