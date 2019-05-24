let state = {
  homeState:['h', 'o', 'm', 'e']
}

let mutations = {
  homeI (state, obj) {
    state.homeState.push(obj)
  },
  homeD (state, obj) {
    state.homeState.pop()
  }
}

let actions = {
  homeI (context, obj) {
    context.commit('homeI', obj)
  },
  homeD (context, obj) {
    context.commit('homeD', obj)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}