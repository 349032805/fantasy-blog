import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/router'
// import Vuex from 'Vuex'
Vue.use(VueRouter)
// Vue.use(Vuex)

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

// const store = new Vuex.Store({
//   state: {
//     title: '欢迎光临fantasy个人站点',
//     showBg: true
//   },
//   mutations: {
//     changeTitle (state,title) {
//     	state.title = title
//     },
//     isShowBg(state,isShow){
//       state.showBg  = isShow
//     }
//   }
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // store,
  router,
  render: h => h(App)
})


// new Vue({
//   el:'title',
//   store,
//   computed : {
//     title () {
//       return this.$store.state.title
//     }
//   }
// })
