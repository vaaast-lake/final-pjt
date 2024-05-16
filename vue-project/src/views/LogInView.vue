<template>
  <div>
    <h1>Log In Page</h1>
    <form @submit.prevent="logIn">
      <label for="username">Username: </label>
      <input type="text" id="username" v-model.trim="username">

      <label for="password">password: </label>
      <input type="text" id="password" v-model.trim="password">

      <input type="submit" value="LogIn">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user';

const username = ref(null)
const password = ref(null)

const store = useUserStore()

const logIn = function () {
  const payload = {
    username: username.value,
    password: password.value,
  }
  store.logIn(payload)
}
</script>

<style>

</style>
