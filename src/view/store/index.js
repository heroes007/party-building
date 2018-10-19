import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    userInfo:"",
    token:"",
    reply:""
  },
  mutations:{
    increment(state, userInfo){
      state.userInfo = userInfo
    },
    addToken(state, token){
      state.token = token
    },
    addReply(state, reply){
      state.reply = reply
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) =>
          sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key),
      },
    }),
  ],
})

export default store
