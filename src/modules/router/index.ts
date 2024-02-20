import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import mainPage from "@/pages/main-page/main-page.vue";
import catalogPage from "@/pages/catalog-page/catalog-page.vue";
import bookPage from "@/pages/book-page/book-page.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect:'/Main'
  },
  {
    path: '/Main',
    name: 'Main',
    component: mainPage
  },
  {
    path: '/Catalog',
    name: 'Catalog',
    component: catalogPage
  },
  {
    path: '/Book/:id',
    name: "Book",
    component: bookPage
  }
/*  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../../pages/AboutView.vue')
  }*/
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
