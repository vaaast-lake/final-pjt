<template>
  <div>
    <h3>Article List</h3>
    <ArticleListItem 
      v-for="article in store.articles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/user'
import ArticleListItem from '@/components/ArticleListItem.vue'

const store = useUserStore()

onMounted(() => {
  store.getArticles()
})
</script>
