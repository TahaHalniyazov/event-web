import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Login.vue')
  },
  {
    path: '/moments',
    name: 'moments',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Moments/Moments.vue')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import(/* webpackChunkName: "about" */ '@/components/SharePopup.vue')
  },
  {
    path: '/event-card-create',
    name: 'event-card-create',
    component: () => import( '@/components/EventCard/EventCardCreate.vue')
  },
  {
    path: '/host-setting',
    name: 'host-setting',
    component: () => import(/* webpackChunkName: "about" */ '@/components/HostComponents/HostSetting.vue')
  },
  {
    path: '/player-page',
    name: 'player-page',
    component: () => import(/* webpackChunkName: "about" */ '@/components/PlayerComponents/PlayerPage.vue')
  },
  {
    path: '/event-info',
    name: 'event-info',
    component: () => import( '@/components/EventInfo/EventInfo.vue')
  },
  {
    path: '/templates',
    name: 'templates',
    component: () => import(/* webpackChunkName: "about" */ '@/components/Templates.vue')
  },
  {
    path: '/user-panel',
    name: 'user-panel',
    component: () => import(/* webpackChunkName: "about" */ '@/components/UserPanel/UserPanel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.VITE_BASE_URL,
  routes
})

export default router
