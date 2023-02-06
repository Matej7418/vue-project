<template>
  <Auth
      :providers="['google', 'apple']"
      socialLayout="col"
      :appearance="appearance"
      @signInWithPassword="creds => supabase.auth.signInWithPassword(creds)"
      @signUp="creds => supabase.auth.signUp(creds)"
      @signInWithOAuth="provider => supabase.auth.signInWithOAuth(provider)"
  />
</template>

<script setup >
import { createClient } from '@supabase/supabase-js'
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

const supabase = createClient(
    'https://fcxwyixtesfcggenvlzf.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjeHd5aXh0ZXNmY2dnZW52bHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3MjMwMTcsImV4cCI6MTk5MTI5OTAxN30.chhd6Sik17IJ6kWJKkwQ_w79CGrO112etUkX7OaKpf4'
)
</script>