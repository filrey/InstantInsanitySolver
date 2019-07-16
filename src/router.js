import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Table from './views/Table.vue'
import Bellman from './views/BellmanFord.vue'
import Factorial from './views/Factorial.vue'
import MinObstacle from './views/MinObstacle.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/minObstacle',
      name: 'minObstacle',
      component: MinObstacle
    },    
    {
      path: '/table',
      name: 'table',
      component: Table
    },
    {
      path: '/bellman',
      name: 'bellman',
      component: Bellman
    },
    {
      path: '/factorial',
      name: 'factorial',
      component: Factorial
    },            
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
