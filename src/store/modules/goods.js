import types from '../types.js'
import axios from 'axios'

const state={
    goods:{},
    aclass:0
}

const getters={
	goods(state){
       return state.goods;
	},
	aclass(state){
		return state.aclass;
	}
}

const actions={
	getGoods({commit,state}){
       axios.get('/api/goods').then(resp => {
          if(resp.data.error==0){
          	commit(types.GET_GOODS,resp.data.data);
          }
       });
	},
	aclass({commit},obj){
		//console.log(obj.index);
		//commit(types.CHANGE_CLASS,obj);
		state.aclass = obj.index;
	}
}

const mutations={
	[types.GET_GOODS](state,data){
        state.goods = data;
	},
	[types.CHANGE_CLASS](state,obj){
		console.log(obj);
		state.aclass = obj.index;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}