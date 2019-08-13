import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";
const state = {
  token: window.localStorage.getItem("token")
};

const getters = {
  isLoggedIn: state => {
    if (state.token === null || state.token === "") {
      return false;
    } else {
      return true;
    }
  }
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const term = qs.parse(hash.replace("#", ""));
    commit("setToken", term.access_token);
    window.localStorage.setItem("token", term.access_token);
    router.push("/");
  },

  logout: ({ commit }) => {
    commit("setToken", "");
    window.localStorage.setItem("token", "");
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
