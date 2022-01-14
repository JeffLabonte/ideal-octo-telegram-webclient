<template>
  <div>
    <input v-model="input.email" type="text" name="email" placeholder="Email" />
    <input v-model="input.emailConfirmation" type="text" name="email" placeholder="Confirm Email" />
  </div>
  <div>
    <input
      v-model="input.password"
      type="password"
      name="password"
      placeholder="Create your password"
    />
    <input
      v-model="input.passwordConfirmation"
      type="password"
      name="password"
      placeholder="Confirm your password"
    />
  </div>
  <div>
    <button v-on:click="register()">Register</button>
    <button>Cancel</button>
  </div>
</template>

<script>
import axios from "axios";
const URL = "http://backend:80";

export default {
  name: "register-component",
  data() {
    return {
      input: {
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
      },
      error: null,
    };
  },
  methods: {
    register: function () {
      axios.post({
        url: `{URL}/api/auth/registration`,
        data: JSON.stringify({
          email: this.input.email,
          password1: this.input.password,
          password2: this.input.passwordConfirmation,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  },
};
</script>

<style></style>
