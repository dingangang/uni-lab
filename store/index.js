import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
			role: 'teacher',
	},
	mutations: {
		SET_ROLE: (state, data) => {
			state.role = data
		},
	},
	getters: {
		role: state => state.role
	},
	actions: {
	}
})

export default store
