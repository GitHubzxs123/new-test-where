import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail1 from '@/pages/detail1/Detail1.vue'
import Detail2 from '@/pages/detail2/Detail2.vue'
import Detail3 from '@/pages/detail3/Detail3.vue'
import Detail4 from '@/pages/detail4/Detail4.vue'
import Detail5 from '@/pages/detail5/Detail5.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail1',
    name: 'Detail1',
    component: Detail1
  }, {
    path: '/detail2',
    name: 'Detail2',
    component: Detail2
  }, {
    path: '/detail3',
    name: 'Detail3',
    component: Detail3
  }, {
    path: '/detail4',
    name: 'Detail4',
    component: Detail4
  }, {
    path: '/detail5',
    name: 'Detail5',
    component: Detail5
  }],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
