import { createStore } from "vuex";

export default createStore({
    state: {
        email: "",
        token: "",
        loginTries: 0,
    },
    mutations: {
        addEmail(state, email) {
            state.email = email;
        },
        addToTries(state){
            state.loginTries++;
        }
    }
});
