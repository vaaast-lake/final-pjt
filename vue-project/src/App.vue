<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'articles'}">Articles</RouterLink><br>
      <RouterLink :to="{ name: 'SignUpView'}">SignUpPage</RouterLink><br>
      <RouterLink :to="{ name: 'LogInView'}">LogInPage</RouterLink><br>
      <RouterLink :to="{ name: 'bankMap'}">BankMap</RouterLink><br>
      <button @click="logOut">LOGOUT</button>
    </nav>
  </header>
  <h1>App vue</h1>
  <RouterView />
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/user'

const store = useUserStore()
const logOut = () => {
  store.logout()
}
</script>

<style scoped>
</style>
