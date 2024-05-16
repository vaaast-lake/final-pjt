<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'ArticleView'}">Articles</RouterLink><br>
      <RouterLink :to="{ name: 'SignUpView'}">SignUpPage</RouterLink><br>
      <RouterLink :to="{ name: 'LogInView'}">LogInPage</RouterLink><br>
      <RouterLink :to="{ name: 'LogoutView'}">Logout</RouterLink><br>

    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
</style>
