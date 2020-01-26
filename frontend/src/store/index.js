import Vue from "vue";
import Vuex from "vuex";

import { parseCompanies, parseUsers } from "@/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    companies: [],
    query: {
      minAge: null,
      maxAge: null,
      ageOrder: null,
      selectedCompanies: []
    }
  },
  mutations: {
    SET_COMPANIES(state, companies) {
      Vue.set(state, "companies", companies);
    },
    SET_QUERY(state, query) {
      Vue.set(state, "query", query);
    },
    SET_USER_DETAILS(state, userData) {
      Vue.set(state, "userDetails", userData);
    },
    SET_USERS(state, newList) {
      Vue.set(state, "users", newList);
    }
  },
  actions: {
    setQuery({ commit }, query) {
      commit("SET_QUERY", query);
    },
    async fetchDetails({ commit }, userId) {
      const response = await fetch(`http://localhost:8000/users/${userId}`);
      const data = await response.json();
      commit("SET_USER_DETAILS", data);
    },
    async fetchAll({ commit }) {
      const response = await fetch("http://localhost:8000/users");
      const data = await response.json();

      commit("SET_USERS", parseUsers(data));
      commit("SET_COMPANIES", parseCompanies(data));
    }
  },
  modules: {}
});
