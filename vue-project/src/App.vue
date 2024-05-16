<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'ArticleView'}">Articles</RouterLink><br>
      <RouterLink :to="{ name: 'SignUpView'}">SignUpPage</RouterLink><br>
      <RouterLink :to="{ name: 'LogInView'}">LogInPage</RouterLink><br>
      <button @click="logOut">LOGOUT</button>
    </nav>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const logOut = () => {
  store.logout()
}
</script>

<style scoped>
</style>
