export const state = () => ({
  apiKey: null,
});

export const getters = {};
export const mutations = {
  setApiKey(state, {apiKey}) {
    state.apiKey = apiKey;
  }
};
export const actions = {
  login(context, payload) {
    this.$axios.post();
  }
};
