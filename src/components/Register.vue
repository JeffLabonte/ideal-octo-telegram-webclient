<template>
  <form id="register" @submit="registerAccount">
    <div v-if="errors.length">
      <p>Please fix the following errors:</p>
      <ul>
        <li v-for="(index, error) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <div id="email-box">
      <p>
        <label for="email">Please enter your email:</label>
        <input
          id="email"
          v-model="input.email"
          type="email"
          name="email"
          placeholder="you@company.com"
        />
      </p>

      <p>
        <label for="email-confirmation">Please confirm your email:</label>
        <input
          id="email-confirmation"
          v-model="input.emailConfirmation"
          type="email"
          name="email-confirmation"
          placeholder="you@acompany.com"
        />
      </p>
    </div>
    <div>
      <p>
        <label for="password">Please enter your pasword:</label>
        <input
          id="password"
          v-model="input.password"
          type="password"
          name="password"
          placeholder="Th1s!M1gHt!@Be%4@G00d$1dea:)"
        />
      </p>
      <p>
        <label for="password-confirmation">Confirm it please, just in case:</label>
        <input
          id="password-confirmation"
          v-model="input.passwordConfirmation"
          type="password"
          placeholder="0r!Th1s(:"
        />
      </p>
    </div>
    <div>
      <input id="submi" name type="submit" value="Register" />
    </div>
  </form>
</template>

<script>
export default {
  name: "register-component",
  data() {
    return {
      url: "http://backend:80/api/auth/registration",
      input: {
        email: "",
        emailConfirmation: "",
        password: "",
        passwordConfirmation: "",
      },
      error: [],
    };
  },
  methods: {
    registerAccount() {
      this.errors.append("This is a test");
    },
  },
};
</script>

<style></style>
