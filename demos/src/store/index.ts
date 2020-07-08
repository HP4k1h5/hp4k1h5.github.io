import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import search from '@/store/mods/search.ts'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { search },
})
