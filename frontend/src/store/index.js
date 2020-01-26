import Vue from "vue";
import Vuex from "vuex";
import * as api from "@/api";
import { parseCompanies, parseUsers } from "@/utils";

const cache = store => {
  store.subscribe((mutation, state) => {
    localStorage.setItem("STATE", JSON.stringify(state));
  });
};

const getCached = () => {
  if (localStorage.getItem("STATE")) {
    return JSON.parse(localStorage.getItem("STATE"));
  }
  return {
    users: [],
    userData: null,
    companies: [],
    page: 1,
    isLoading: false,
    query: {
      minAge: null,
      maxAge: null,
      sortBy: null,
      selectedCompanies: []
    }
  };
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: getCached(),
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
    },
    SET_PAGE(state, page) {
      Vue.set(state, "page", page);
    },
    SET_IS_LOADING(state, isLoading) {
      Vue.set(state, "isLoading", isLoading);
    }
  },
  actions: {
    setQuery({ commit }, query) {
      commit("SET_QUERY", query);
    },
    async fetchDetails({ commit }, userId) {
      commit("SET_USER_DETAILS", null);
      commit("SET_IS_LOADING", true);
      const data = await api.fetchUserDetails(userId);
      commit("SET_USER_DETAILS", data);
      commit("SET_IS_LOADING", false);
    },
    async fetchAll({ commit }) {
      commit("SET_IS_LOADING", true);
      const data = await api.fetchAllUsers();
      commit("SET_USERS", parseUsers(data));
      commit("SET_COMPANIES", parseCompanies(data));
      commit("SET_IS_LOADING", false);
    },
    async fetchFiltered({ commit }, query) {
      commit("SET_IS_LOADING", true);
      const data = await api.fetchFilteredUsers(
        api.parseUrl(api.parseParams(query))
      );
      commit("SET_PAGE", 1);
      commit("SET_USERS", parseUsers(data));
      commit("SET_IS_LOADING", false);
    },
    setPage({ commit }, page) {
      commit("SET_PAGE", page);
    }
  },
  plugins: [cache],
  modules: {}
});
