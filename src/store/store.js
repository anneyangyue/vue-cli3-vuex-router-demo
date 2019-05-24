import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import about from './about'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     testVal: 1000
//   },
//   mutations: {
//     increase (state, num) {
//       state.testVal += num
//     },
//     decrease (state, num) {
//       state.testVal -= num
//     }
//   },
//   actions: {
//     increase (context, num) {
//       context.commit('increase', num)
//     },
//     decrease (context, num) {
//       context.commit('decrease', num)
//     }
//   }
// })

export default new Vuex.Store({
  modules: {
    home,
    about
  }
})
