import { createRouter, createWebHistory } from 'vue-router'
import LearnView from '@/views/LearnView.vue'
import TestView from '@/views/TestView.vue'
import HomeView from '@/views/HomeView.vue'

export enum LAYOUT_ENUM {
  DEFAULT_LAYOUT = 'default-layout',
  AUTH_LAYOUT = 'auth-layout'
}

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: HomeView
  },
  {
    path: '/learn',
    name: 'learn',
    meta: {
      layout: LAYOUT_ENUM.AUTH_LAYOUT
    },
    component: LearnView
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      layout: LAYOUT_ENUM.DEFAULT_LAYOUT
    },
    component: TestView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
