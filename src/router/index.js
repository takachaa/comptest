import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Top from '../views/Top.vue'
import Top2 from '../views/Top2.vue'
import Top3 from '../views/Top3.vue'
import MailAuth from '../views/MailAuth.vue'
import SignupComplete from '../views/SignupComplete.vue'
import Top2Detail from '../views/Top2Detail.vue'
import Top3Detail from '../views/Top3Detail.vue'
import Top4Detail from '../views/Top4Detail.vue'
import Message from '../views/Message.vue'
import MessageDetail from '../views/MessageDetail.vue'
import Menu from '../views/Menu.vue'
import Footprints from '../views/Footprints.vue'
import Like from '../views/Like.vue'
import Favorite from '../views/Favorite.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/top2',
    name: 'Top2',
    component: Top2
  },
  {
    path: '/top3',
    name: 'Top3',
    component: Top3
  },
  {
    path: '/mailauth',
    name: 'MailAuth',
    component: MailAuth
  },
  {
    path: '/signupcomplete',
    name: 'SignupComplete',
    component: SignupComplete
  },
  {
    path: '/detail2',
    name: 'Top2Detail',
    component: Top2Detail
  },
  {
    path: '/detail3',
    name: 'Top3Detail',
    component: Top3Detail
  },
  {
    path: '/detail4',
    name: 'Top4Detail',
    component: Top4Detail
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/messagedeital',
    name: 'MessageDetail',
    component: MessageDetail
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/footprints',
    name: 'Footprints',
    component: Footprints
  },
  {
    path: '/like',
    name: 'Like',
    component: Like
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
