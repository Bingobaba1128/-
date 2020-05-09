import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store ({

  state: {
    date: new Date()
  },

  getters: {
    weekDate: state => {
      return (state.date).format('dddd')
    }
  },

  mutations: {
    imcrement (state,n) {
      state.count += n
    }
  }


})

export default store