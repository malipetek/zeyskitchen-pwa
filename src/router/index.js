import Vue from 'vue'
import Router from 'vue-router'
import Anasayfa from '@/components/Anasayfa'
import Tarif from '@/components/Tarif'
import Hesap from '@/components/Hesap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Anasayfa',
      component: Anasayfa
    },
    {
      path: '/tarif/:tarif',
      name: 'tarif',
      component: Tarif
    },
    {
      path: '/hesap',
      name: 'hesap',
      component: Hesap
    },

    {
      path: '/hesap/:action',
      name: 'hesap',
      component: Hesap
    }
  ]
})
