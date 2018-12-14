import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use( axios)

// axios.defaults.headers.get['Accept'] = 'application/json'
// axios.defaults.headers.common['Content-Type'] = 'application/json'

new Vue({
  el: '#app',
  render: h => h(App)
})
