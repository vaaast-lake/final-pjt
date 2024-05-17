import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'
import ArticleView from '@/views/ArticleView.vue'
import SignUpView from '@/views/SignUpView.vue'
import LogInView from '@/views/LogInView.vue'
import ArticleList from '@/components/ArticleList.vue'
import ArticleDetail from '@/components/ArticleDetail.vue'
import ArticleCreate from '@/components/ArticleCreate.vue'
import BankMapView from '@/views/BankMapView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/articles',
      // name: 'ArticleView',
      component: ArticleView,
      children: [
        { path: '', name: 'articles', component: ArticleList },
        { path: ':id', name: 'article_detail', component: ArticleDetail },
        { path: 'create', name: 'article_create', component: ArticleCreate },
      ]
    },
    {
      path: '/signup',
      name: 'SignUpView',
      component: SignUpView
    },
    {
      path: '/login',
      name: 'LogInView',
      component: LogInView
    },
    {
      path: '/bank',
      name: 'bankMap',
      component: BankMapView
    },
  ]
})

router.beforeEach((to, from) => {
  // to and from are both route objects. must call `next`.
  const store = useUserStore()
  if (to.name === 'article_create' && !store.isLogin) {
    window.alert('need login')
    return { name: 'LogInView' }
  }
  if ((to.name === 'SignUpView' || to.name === 'LogInView') && (store.isLogin)) {
    window.alert('aleady logined')
    return { name: 'articles' }
  }
})

export default router
