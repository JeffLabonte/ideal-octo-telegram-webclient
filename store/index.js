export const state = () => ({
  apiKey: null,
  loginUrl: 'http://192.168.68.117/api/auth/login/',
});

export const getters = {
  getApiKey(state) {
    return state.apiKey;
  }
};
export const mutations = {
  setApiKey(state, apiKey) {
    state.apiKey = apiKey;
  }
};

export const actions = {
  login(context, payload) {
    this.$axios.post(
      context.state.loginUrl,
      payload,
    ).then((response) => {
      const apiKey = response.data.key;
      context.commit("setApiKey", apiKey);
      this.$router.push("/home")
    }).catch((error) => {
      console.log(error);
    });
  }
};
