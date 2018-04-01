import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import goods from './modules/goods'
import ratings from './modules/ratings'
import seller from './modules/sellers'

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	actions,
	modules:{
		seller,
		goods,
		ratings
	}
});
