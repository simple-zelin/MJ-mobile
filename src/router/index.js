import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import Home from '@/views/Home'

import Article from '@/views/Layout/Article'
import Collect from '@/views/Layout/Collect'
import Like from '@/views/Layout/Like'
import User from '@/views/Layout/User'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/detail/:id', component: Detail },
  {
    path: '/',
    redirect: '/article',
    component: Home,
    children: [
      { path: 'article', component: Article }, // 面经列表
      { path: 'collect', component: Collect }, // 收藏
      { path: 'like', component: Like }, // 喜欢
      { path: 'user', component: User } // 我的
    ]
  }
]

const router = new VueRouter({
  routes
})

// 这里，加入导航守卫（全局前置导航守卫）
router.beforeEach((to, from, next) => {
  // 访问任何地址，都会执行这个函数
  // - to 表示你要访问的那个页面   to.path 表示你要访问的那个路由地址
  // - from 表示你哪里跳转过来的
  // - next() -- 允许通过；  next('/login') -- 表示不允许通过，并跳转到/login
  // console.log(to)
  if (
    !localStorage.getItem('mobile-token') &&
    to.path !== '/login' &&
    to.path !== '/register'
  ) {
    next('/login') // 跳转到登录页
    return
  }
  next() // 不符合上述条件，允许通过
})

export default router
