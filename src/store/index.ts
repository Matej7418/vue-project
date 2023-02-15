import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import { Room, User, Session } from '@/interface';

export interface State {
  rooms: Room[],
  users: User[],
  session: User //TODO
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    rooms: [],
    users: [],
    session: new User(0, 'TEST_USER')
  },
  getters: {
    /*getChatRoomUsers: (state, getters) => (roomId: number): {_id: string, username: string}[] => {

      let u: User = getters.getUser(id);
      return { _id: u.id.toString(), username: u.username }
    },*/
  },
  mutations: {
    setRooms(state, rooms) {
      state.rooms = rooms;
    },
    setUsers(state, users: {id: number, username: string, avatar?: string}[]) {
      state.users = []
      users.forEach(user => { state.users.push(new User(user.id, user.username, user.avatar)) })
    },
    setSession(state, session) {
      state.session = session;
    }
  },
  actions: {
    getUser(context, id: number): User {
      return context.state.users.filter(user => {return user.id === id})[0];
    },
    getUserAvatar(context, id: number): string {
      return context.state.users.filter(user => {return user.id === id})[0].avatar;
    },
    getChatUser(context, id:number): {_id: string, username: string} {
      const u: User = context.state.users.filter(user => {return user.id === id})[0];
      return { _id: u.id.toString(), username: u.username }
    },
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