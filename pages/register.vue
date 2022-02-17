<template>
  <main class="form-signin">
    <img src alt width="72" height="57" />
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <label for="floatingInput">Email Address</label>
      <input
        id="floatingInput"
        class="form-control"
        type="email"
        v-model="email"
        placeholder="name@examplecom"
      />
    </div>
    <div class="form-floating">
      <label for="floatingEmailConfirmation">Confirm Email Address</label>
      <input
        id="floatingEmailConfirmation"
        class="form-control"
        type="email"
        v-model="emailConfirmation"
        placeholder="name@examplecom"
      />
    </div>
    <div class="form-floating">
      <label for="floatingPassword">Password</label>
      <input
        id="floatingPassword"
        class="form-control"
        type="password"
        v-model="password"
        placeholder="Password"
      />
    </div>
    <div class="form-floating">
      <label for="floatingPasswordConfirmation">Password</label>
      <input
        id="floatingPassword"
        class="form-control"
        type="password"
        v-model="password"
        placeholder="Password"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="column">
          <button class="w-100 btn btn-lg btn-primary" type="submit" v-on:submit="register">Sign in</button>
        </div>
        <div class="column">
          <button class="w-100 btn btn-lg">
            <NuxtLink to="/">Go back to login</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'RegisterPage',
  data: () => {
    return {
      email: '',
      emailConfirmation: '',
      password: '',
      passwordConfirmation: '',
      errors: null,
      backendUrl: process.env.BACKEND_URL,
    };
  },
  methods: {
    reset_password: () => {
      this.password = '';
      this.passwordConfirmation = '';
    },
    reset_email: () => {
      this.email = '';
      this.emailConfirmation = '';
    },
    send_registration_query: () => {
      this.$axios.post();
    },
    register: () => {
      if (
        this.email !== '' ||
        this.emailConfirmation !== '' ||
        this.password !== '' ||
        this.passwordConfirmation !== ''
      ) {
        if (this.email !== this.emailConfirmation) {
          this.errors = 'Your email need to be the same as the confirmation';
          this.reset_password();
        } else if (this.password !== this.passwordConfirmation) {
          this.errors = 'Your password needs to match the confirmation';
          this.reset_password();
        } else {
          return null;
        }
      } else {
        self.errors =
          'You need to enter a password, a password confirmation, an email, and confirm your email';
      }
    },
  },
};
</script>
>
