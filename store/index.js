import { Store } from 'vuex';

const createStore = () => {
  return new Store({
    state: () => ({
      api_key: null,
    }),
    getters: {},
    mutations: {},
    actions: {},
  });
};

export default createStore;
