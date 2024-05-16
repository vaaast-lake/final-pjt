import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const API_URL = 'http://127.0.0.1:8000'
  const token = ref(null)
  const articles = ref([])
  const router = useRouter()

  const isLogin = computed(() => {
    return token.value === null ? false : true
  })

  const signUp = function (payload) {
    const username = payload.username
    const password1 = payload.password1
    const password2 = payload.password2
    // const { username, password1, password2 } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2
      }
    })
    .then(res => {
      const password = password1
      logIn({ username, password })
      console.log('signup compolete');
    })
    .catch(err => {
      console.log(err);
    })
  }

  const logIn = function (payload) {
    const username = payload.username
    const password = payload.password

    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    })
    .then(res => {
      token.value = res.data.key
      router.push({ name: 'articles' })
      console.log('log in complete');
    })
    .catch(err => console.log(err))
  }

  const logout = function () {
    token.value = null
    axios({
      method: 'post',
      url: `${API_URL}/accounts/logout/`
    })
    .then(res => {
      console.log(res);
      console.log('로그아웃 완료');
    })
    .catch(err => {
      console.log(err);
    })
    router.push({ name: 'LogInView' })
  }

  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    })
    .then(res => {
      articles.value = res.data
    })
    .catch(err => {
      console.log(err);
    })
  }

  return { API_URL, signUp, logIn, token, getArticles, articles, isLogin, logout } 
}, { persist: true })
