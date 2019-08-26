import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Images from '@/components/Images'
import Accordion from '@/components/Accordion'
import Nav from '@/components/Nav'
import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Images',
      name: 'Images',
      component: Images
    },
    {
      path: '/Accordion',
      name: 'Accordion',
      component: Accordion
    },
    {
      path: '/Nav',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/Card',
      name: 'Card',
      component: Card
    }
  ]
})
