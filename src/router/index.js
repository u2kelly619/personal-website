import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodMapView from '../views/FoodMapView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/food-map',
    name: 'food-map',
    component: FoodMapView
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
