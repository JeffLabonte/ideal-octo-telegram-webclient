<template>
  <main class="form-signin">
    <div v-if="error">
      <p>{{ error }}</p>
    </div>
    <div v-if="messages">
      <ul>
        <li v-for="(key, message) in messages" v-bind:key="key">{{ message }}</li>
      </ul>
    </div>
    <img src alt width="72" height="57" />
    <h1 class="h3 mb-3 fw-normal">Please Register</h1>
    <div class="form-floating">
      <label for="floatingInput">Email Address</label>
      <input
        id="floatingInput"
        class="form-control"
        v-model="email"
        type="email"
        placeholder="name@examplecom"
      />
    </div>
    <div class="form-floating">
      <label for="floatingEmailConfirmation">Confirm Email Address</label>
      <input
        id="floatingEmailConfirmation"
        class="form-control"
        v-model="emailConfirmation"
        type="email"
        placeholder="name@examplecom"
      />
    </div>
    <div class="form-floating">
      <label for="floatingPassword">Password</label>
      <input
        id="floatingPassword"
        class="form-control"
        v-model="password"
        type="password"
        placeholder="Password"
      />
    </div>
    <div class="form-floating">
      <label for="floatingPasswordConfirmation">Password Confirmation</label>
      <input
        id="floatingPassword"
        class="form-control"
        v-model="passwordConfirmation"
        type="password"
        placeholder="Password"
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="column">
          <button class="w-100 btn btn-lg btn-primary" type="submit" v-on:click="register">Register</button>
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
      error: null,
      registrationURL: `http://localhost/api/auth/registration/`,
      messages: null,
    };
  },
  methods: {
    reset_password() {
      this.password = '';
      this.passwordConfirmation = '';
    },
    reset_email() {
      this.email = '';
      this.emailConfirmation = '';
    },
    sendRegistrationQuery() {
      console.log(this.registrationURL);
      this.$axios
        .post(this.registrationURL, {
          email: this.email,
          username: this.email,
          password1: this.password,
          password2: this.passwordConfirmation,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    register() {
      if (
        this.email !== '' ||
        this.emailConfirmation !== '' ||
        this.password !== '' ||
        this.passwordConfirmation !== ''
      ) {
        if (this.email !== this.emailConfirmation) {
          this.error = 'Your email need to be the same as the confirmation';
          this.reset_password();
        } else if (this.password !== this.passwordConfirmation) {
          this.error = 'Your password needs to match the confirmation';
          this.reset_password();
        } else {
          this.sendRegistrationQuery();
        }
      } else {
        self.errors =
          'You need to enter a password, a password confirmation, an email, and confirm your email';
      }
    },
  },
};
</script>
