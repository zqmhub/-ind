import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    count:0
  },
  mutations: {
    setToken() {

    },
    addCount(state){
      state.count++

      console.log(state.count);
      
    }
  },
  actions: {

  }
})