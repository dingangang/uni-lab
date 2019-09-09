import Vue from 'vue'
import App from './App'
import store from './store'
// #ifdef H5
import Vant from 'vant';
// #endif
import dayjs from 'dayjs'

// #ifdef H5
Vue.use(Vant);
// #endif

Vue.config.productionTip = false;

Vue.prototype.$dayjs = dayjs

App.mpType = 'app';

const app = new Vue({
	store,
	...App
})
app.$mount()
