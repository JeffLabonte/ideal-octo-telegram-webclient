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
export default {
  name: "Register",
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
      console.log("Log");
    },
  },
};
</script>

<style></style>
