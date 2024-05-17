<template>
  <div>
    <h1>은행 지도</h1>
    <Map :width="800" :height="600" keyWord="은행"/>
  </div>
</template>

<script setup>
import Map from '@/components/Map.vue'
</script>

<style scoped>
</style>
