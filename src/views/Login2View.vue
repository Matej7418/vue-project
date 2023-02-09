<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session" />
    <div v-else>
      <Auth/>
    </div>
  </div>
</template>

<script>

</script>