import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Images from '@/components/Images'
import Accordion from '@/components/Accordion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
