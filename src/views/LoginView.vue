<template>
  <div style="width: 40vw; margin: auto;">
    <Auth
        :providers="['google', 'github']"
        socialLayout="col"
        :appearance="appearance"
        @signInWithPassword="creds => supabase.auth.signInWithPassword(creds)"
        @signUp="creds => supabase.auth.signUp(creds)"
        @signInWithOAuth="provider => supabase.auth.signInWithOAuth(provider)"
    />
  </div>
</template>

<script setup>
import { supabase } from '@/supabase.js'
import { Auth, ThemeBold, css } from 'vue-auth-ui'

const appearance = {
  theme: ThemeBold,
  themeVariant: 'dark',
  // In addition to theme and variant you can specify other preferences.
  // More on that in the "customization" section.
  prependedClassName: 'my-custom-class',
  className: {
    button: css({
      variants: {
        color: {
          primary: {
            backgroundColor: 'blue'
          }
        }
      }
    })
  }
}
</script>