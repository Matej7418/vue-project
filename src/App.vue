<template>
  <!--<div v-if="session">
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
  </div>-->
  <!--<nav class="bg-slate-200 dark:bg-slate-900">
    <router-link :to="{ name:'home' }">Default</router-link> |
    <router-link :to="{ name:'chat' }">Chat</router-link> |
    <router-link :to="{ name:'calendar' }">Calendar</router-link> |
    <router-link :to="{ name:'login' }">Login</router-link>
  </nav>-->
  <NavbarComponent/>
  <router-view/>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '@/supabase'
import { useStore } from 'vuex'
import Account from "@/components/Account.vue";
import Auth from "@/components/Auth.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from "axios";
const session = ref()
const store = useStore()

function saveData(data) {
  store.commit("setRooms", data.rooms);
  store.commit("setUsers", data.users);
  console.log(data);
  console.log(store.state);
}

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})

onMounted(async () => {
  await axios.get("https://raw.githubusercontent.com/Matej7418/vue-project/main/db.json")
      .then((result) => saveData(result.data))
      .catch(function (e) { console.error(e) })
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
  user-select: none;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      text-decoration: underline;
      color: #42b983;
    }
  }
}
</style>