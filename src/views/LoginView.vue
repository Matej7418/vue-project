<template>
  <Auth
      :providers="['google', 'apple']"
      @signInWithPassword="creds => supabase.auth.signInWithPassword(creds)"
      @signUp="creds => supabase.auth.signUp(creds)"
      @signInWithOAuth="provider => supabase.auth.signInWithOAuth(provider)"
  />
</template>

<script setup>
import { createClient } from '@supabase/supabase-js'
import { Auth } from 'vue-auth-ui'

const supabase = createClient(
    'my-project-url',
    'my-anon-key'
)
</script>