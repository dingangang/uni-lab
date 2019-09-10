import Vue from 'vue'
import App from './App'
import store from './store'
import Vant from 'vant';
import dayjs from 'dayjs'

Vue.use(Vant);

Vue.config.productionTip = false;

Vue.prototype.$dayjs = dayjs

App.mpType = 'app';

const app = new Vue({
	store,
	...App
})
app.$mount()
