<template>
  <div v-if="session">
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/chat">Chat</router-link> |
      <router-link to="/calendar">Calendar</router-link> |
      <router-link to="/home">Default</router-link>
    </nav>
    <div class="container" style="padding: 50px 0 100px 0">
      <Account :session="session" />
    </div>
  </div>
  <div v-else>
    <router-link to="/login">Login</router-link>
    <Auth/>
  </div>
  <router-view/>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '@/supabase'
import Account from "@/components/Account.vue";
import Auth from "@/components/Auth.vue";

const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
