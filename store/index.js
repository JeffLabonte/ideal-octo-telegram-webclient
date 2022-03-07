export const state = () => ({
  apiKey: null,
  loginUrl: 'http://192.168.68.117/api/auth/login',
});

export const getters = {};
export const mutations = {
  setApiKey(state, {apiKey}) {
    state.apiKey = apiKey;
  }
};
export const actions = {
  login(context, payload) {
    this.$axios.post(
      context.loginUrl,
      payload,
    ).then((response) => {
      console.log(response);
    });
  }
};
