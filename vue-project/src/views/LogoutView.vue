<template>
  <button @click="handleLogout">로그아웃</button>
</template>

<script>
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const counterStore = useCounterStore()

    const handleLogout = () => {
      counterStore.logout()
    }

    return { handleLogout }
  }
}
</script>
