import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Products from '@/components/Products'
import Articles from '@/components/Articles'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
        path: '/articles',
        name: 'articles',
        component: Articles,
      }
  ]
})
