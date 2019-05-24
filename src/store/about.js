let state = {
  aboutState: ['a', 'b', 'o', 'u', 't']
}

let mutations = {
  aboutI (state, obj) {
    state.aboutState.push(obj)
  },
  aboutD (state, obj) {
    state.aboutState.pop()
  }
}

let actions = {
  aboutI (context, obj) {
    context.commit('aboutI', obj)
  },
  aboutD (context, obj) {
    context.commit('aboutD', obj)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
