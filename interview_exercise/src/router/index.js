import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import DatatableExe from '@/components/DatatableExe'
import Navigation from '@/components/Navigation'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/DatatableExe',
      name: 'DatatableExe',
      component: DatatableExe
    },
    {
      path: '/',
      name: 'Navigation',
      component: Navigation
    }
  ]
})
