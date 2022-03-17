import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import OverView from '../views/OverView.vue'

// ======test========
// import OverView from '../views/LocationMap.vue'
// import OverView from '../views/OverView.vue'
// import Demo from '../views/Demo.vue'
// import OverView from '../views/Apart.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'OverView',
    component: OverView
  },
  {
    path: '/furniture/:type',
    name: 'Furniture',
    component: () => import(/* webpackChunkName: "about" */ '../views/Furniture.vue')
  },
  // {
  //   path: '/ove',
  //   name: 'Overview',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/OverView.vue')
  // },
    {
    path: '/location',
    name: 'LocationMap',
    component: () => import(/* webpackChunkName: "about" */ '../views/LocationMap.vue')
  },
    {
    path: '/floorplans',
    name: 'Floorplans',
    component: () => import(/* webpackChunkName: "about" */ '../views/Floorplans.vue')
  },
    {
    path: '/apart/:type',
    name: 'Apart',
    component: () => import(/* webpackChunkName: "about" */ '../views/Apart.vue')
  },
    {
    path: '/test/:type',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },



  // ===========test=======
  // {
  //   path: '/',
  //   name: 'OverView',
  //   component: OverView
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
