<template>
  <div class="map-container">
    <div id="map" :style="`width: ${width}px; height: ${height}px;`"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY

const props = defineProps({
  width: {
    type: Number,
    default: 500
  },
  height: {
    type: Number,
    default: 400
  }
})

const center = ref([33.450701, 126.570667])
const level = ref(3)

onMounted(() => {
  loadKakaoMapScript().then(() => {
    if (window.kakao && window.kakao.maps) {
      kakao.maps.load(initMap)
    } else {
      console.error('Kakao Map API 로드 실패: kakao.maps가 정의되지 않았습니다.')
    }
  }).catch(error => {
    console.error('Kakao Map API 로드 실패:', error)
  })
})

const loadKakaoMapScript = () => {
  return new Promise((resolve, reject) => {
    if (window.kakao && window.kakao.maps) {
      resolve()
    } else {
      const script = document.createElement('script')
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Kakao Map API 로드 실패'))
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${MAP_API_KEY}`
      document.head.appendChild(script)
    }
  })
}

const initMap = () => {
  const mapContainer = document.getElementById('map')
  const mapOption = {
    center: new kakao.maps.LatLng(center.value[0], center.value[1]),
    level: level.value
  }
  new kakao.maps.Map(mapContainer, mapOption)
}
</script>

<style scoped>
.map-container {
  position: relative;
}
</style>
