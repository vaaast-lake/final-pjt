<template>
  <div>
    <h1>Sign Up Page</h1>
    <form @submit.prevent="signUp">
      <label for="username">Username: </label>
      <input type="text" id="username" v-model.trim="username">

      <label for="password1">password: </label>
      <input type="text" id="password1" v-model.trim="password1">
      
      <label for="password2">password confirmation: </label>
      <input type="text" id="password2" v-model.trim="password2">

      <input type="submit" value="SignUp">
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter';

const username = ref(null)
const password1 = ref(null)
const password2 = ref(null)

const store = useCounterStore()

const signUp = function () {
  const payload = {
    username: username.value,
    password1: password1.value,
    password2: password2.value
  }
  store.signUp(payload)
}
</script>

<style>

</style>
