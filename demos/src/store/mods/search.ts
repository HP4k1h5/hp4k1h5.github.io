//import { auth } from '@/api/http'

export default {
  namespaced: true,

  state: {
    curDB: null,
    curCols: [],
    query: null,
    queryArr: [],
    genAQL: null,
    filters: [],
    results: null,
    count: null,
    stats: null,
    querying: null,
    page: 0,
    rpp: 20,
    query_history: [],
    saved_queries: [],
  },

  mutations: {
    SET_QUERY(state, query) {
      state.query = query
    },

    SET_QUERY_ARR(state, queryArr) {
      state.queryArr = queryArr
    },

    SET_QUERYING(state, querying) {
      state.querying = querying
    },

    SET_GEN_AQL(state, aql) {
      state.genAQL = aql
    },

    SET_RESULTS(state, results) {
      state.results = results.results
      state.stats = results.stats
    },

    SET_SAVED(state, saved_queries) {
      state.saved_queries = saved_queries
    },

    SET_DOC(state, docView) {
      state.docView = docView
    },
  },

  actions: {
    async submit({ commit }) {
      commit('SET_QUERYING', true)
      commit('SET_RESULTS', [])
      commit('SET_QUERYING', false)
    },
  },
}
