import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue');
const Feedback = () => import('../views/Feedbacks/index.vue');
const Credentials = () => import('../views/Credentials/index.vue');

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/feedbacks',
      name: 'feedbacks',
      component: Feedback,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/credentials',
      name: 'credentials',
      component: Credentials,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'Home'
      }
    }
  ]
})

export default router
