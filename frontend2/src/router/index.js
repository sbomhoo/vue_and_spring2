import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DetailUser from '@/components/DetailUser'
import WriteForm from '@/components/WriteForm'
import about from '@/components/AboutUser'
import test from '@/components/TestRoom'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/WriteForm',
      name: 'WriteForm',
      component: WriteForm
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/about/detail/:id',
      name: 'DetailUser',
      component: DetailUser
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  
  ]
})
