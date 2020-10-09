import Vuex from "vuex";
import Vue from "vue";
import repo from "@/repository/MediaGalaxyRepository";
import { TV_REQUEST_SUCCESS } from "@/store/mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLarryHappy: true,
    isJennyHappy: true,
    totalTvCount: 10,
    amountBought: 0,
    availableTvs: {},
  },

  getters: {
    happyStaff: (state) => {
      return state.isLarryHappy && state.isJennyHappy;
    },
    amountBought: (state) => {
      return state.amountBought;
    },
    availableTvs: (state) => {
      return state.availableTvs;
    },
  },

  actions: {
    removeTv(context, amount) {
      if (context.state.totalTvCount >= amount) {
        context.commit("removeTv", amount);
      }
    },
    getTvList({ commit }) {
      repo.getExistingTvs().then((res) => {
        commit(TV_REQUEST_SUCCESS, res);
      });
    },
  },

  mutations: {
    removeTv(state, amount) {
      state.totalTvCount -= amount;
      state.amountBought += amount;
    },

    [TV_REQUEST_SUCCESS](state, availableTvs) {
      state.availableTvs = availableTvs;
    },
  },
});
