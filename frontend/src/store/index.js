import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USER_DETAILS(state, userData) {
      Vue.set(state, "userDetails", userData);
    },
    SET_USERS(state, newList) {
      Vue.set(state, "users", newList);
    }
  },
  actions: {
    async fetchDetails({ commit }, userId) {
      const response = await fetch(`http://localhost:8000/users/${userId}`);
      const data = await response.json();
      commit("SET_USER_DETAILS", data);
    },
    async fetchAll({ commit }) {
      const response = await fetch("http://localhost:8000/users");
      const data = await response.json();
      const parsedData = data.map(item => ({
        id: item.id,
        age: item.age,
        company: item.company,
        email: item.email,
        firstName: item.name.first,
        lastName: item.name.last
      }));
      commit("SET_USERS", parsedData);
    }
  },
  modules: {}
});
