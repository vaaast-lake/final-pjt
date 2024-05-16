<template>
  <div>
    <h1>Article View Page</h1>
    <RouterLink :to="{ name: 'article_create' }">
      [CREATE]
    </RouterLink>
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { RouterLink, RouterView } from 'vue-router'

const store = useCounterStore()

onMounted(() => {
  store.getArticles()
})

</script>

<style>

</style>
