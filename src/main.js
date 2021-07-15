import './plugins';
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/style.css'
import {auth} from "./config/firebase"

auth.onAuthStateChanged(function(user) {
	if (user) {
		let data = { email: user.email, uid: user.uid}
		store.commit('SET_currentUser', data)
		router.push('/')
	} else {
		let data = { email: '', uid: ''}
		store.commit('SET_currentUser', data)
		router.push('login')
	}
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
