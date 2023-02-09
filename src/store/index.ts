import { createStore } from 'vuex';
import router from '../router';
import { supabase } from '@/supabase.js';

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
    async signUpAction({dispatch}, form) {
      try {
        const { error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
        });
        if (error) throw error;
        alert("You've been registered successfully");
        await dispatch("signInAction", form)
      } catch (error) {
        alert(error.error_description || error.message);
      }
    }
  },
  modules: {
  }
})
