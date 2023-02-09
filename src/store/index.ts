import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import router from '../router';
import supabase from '@/supabaseAuth';

export default createStore({
  state: {
    session: null
  },
  getters: {
  },
  mutations: {
    setSession(state, session) {
      state.session = session;
    }
  },
  actions: {
    async signInAction({ commit }, form) {
      try {
        const { error, data } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });
        const user: any = data.user;
        if (error) throw error;
        alert("You've Signed In successfully");
        await router.push('/')
        commit('setUser', user.email)
      } catch (error: any) {
        alert(error.error_description || error.message);
      }
    },
    async signUpAction({dispatch}, form) {
      try {
        const { error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        alert("You've been registered successfully");
        await dispatch("signInAction", form)
      } catch (error: any) {
        alert(error.error_description || error.message);
      }
    },
    async signOutAction({ commit }) {
      try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        commit('setUser', null)
        alert("You've been logged Out successfully");
        await router.push("/login");
      } catch (error: any) {
        alert(error.error_description || error.message);
      }
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
