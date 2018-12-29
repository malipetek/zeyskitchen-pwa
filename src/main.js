// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index.js'
// import firebase from 'firebase/app'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VAvatar,
  VDivider,
  VCard,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VAvatar,
    VDivider,
    VCard,
    transitions
  },
  theme: {
    primary: '#E53935',
    secondary: '#EF5350',
    accent: '#EF5350',
    error: '#D50000',
    warning: '#FFB300',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  created () {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyCdBRtNu73Kqh1es7zbeF1JZrZUg_C9_qE',
    //   authDomain: 'yemek-tarifleri-kitabi.firebaseapp.com',
    //   databaseURL: 'https://yemek-tarifleri-kitabi.firebaseio.com',
    //   projectId: 'yemek-tarifleri-kitabi',
    //   storageBucket: 'yemek-tarifleri-kitabi.appspot.com',
    //   messagingSenderId: '522693250446'
    // })
  },
  template: '<App/>'
})
