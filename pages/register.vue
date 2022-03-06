<template>
  <main class="form-signin">
    <div v-if="errors.length > 0">
      <ul>
        <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
      </ul>
    </div>
    <img src alt width="72" height="57" />
    <h1 class="h3 mb-3 fw-normal">Please Register</h1>
    <div class="form-floating">
      <label for="floatingInput">Email Address</label>
      <input
        id="floatingInput"
        v-model="email"
        class="form-control"
        type="email"
        placeholder="name@examplecom"
      />
    </div>
    <div class="form-floating">
      <label for="floatingEmailConfirmation">Confirm Email Address</label>
      <input
        id="floatingEmailConfirmation"
        v-model="emailConfirmation"
        class="form-control"
        type="email"
        placeholder="name@examplecom"
      />
      <div v-if="emailErrors.length > 0">
        <ul>
          <li v-for="(error, key) in emailErrors" :key="key">{{ error }}</li>
        </ul>
      </div>
    </div>
    <div class="form-floating">
      <label for="floatingPassword">Password</label>
      <input
        id="floatingPassword"
        v-model="password"
        class="form-control"
        type="password"
        placeholder="Password"
      />
    </div>
    <div class="form-floating">
      <label for="floatingPasswordConfirmation">Password Confirmation</label>
      <input
        id="floatingPassword"
        v-model="passwordConfirmation"
        class="form-control"
        type="password"
        placeholder="Password"
      />
      <div v-if="passwordErrors.length > 0">
        <ul>
          <li v-for="(error, key) in passwordErrors" :key="key">{{ error }}</li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="column">
          <button class="w-100 btn btn-lg btn-primary" type="submit" @click="register">Register</button>
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
      registrationURL: `http://192.168.68.117/api/auth/registration`,
      errors: [],
      passwordErrors: [],
      emailErrors: [],
    };
  },
  methods: {
    reset_errors() {
      this.errors.split(0, this.errors.length);
    },
    reset_password() {
      this.password = '';
      this.passwordConfirmation = '';
    },
    reset_email() {
      this.email = '';
      this.emailConfirmation = '';
    },
    sendRegistrationQuery() {
      this.$axios
        .post(this.registrationURL, {
          email: this.email,
          username: this.email,
          password1: this.password,
          password2: this.passwordConfirmation,
        })
        .then((response) => {
          this.$router.push('/home');
        })
        .catch((error) => {
          if (error.response.status === 400) {
            const data = error.response.data;
            Object.entries(data).forEach((entry) => {
              const key = entry[0];
              const values = entry[1];

              switch (key) {
                case 'password':
                case 'password1':
                  values.forEach((value) => {
                    this.passwordErrors.push(value);
                  });
                  break;
                case 'email':
                  values.forEach((value) => {
                    this.emailErrors.push(value);
                  });
                  break;
              }
            });
          } else if (error.response.status === 500) {
            this.$set(
              this.errors,
              0,
              'Something went wrong, please contact the administrator'
            );
          }
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
          this.$set(
            this.errors,
            0,
            'Your email need to be the same as the confirmation'
          );
          this.reset_password();
        } else if (this.password !== this.passwordConfirmation) {
          this.$set(
            this.errors,
            0,
            'Your password needs to match the confirmation'
          );
          this.reset_password();
        } else {
          this.sendRegistrationQuery();
        }
      } else {
        this.$set(
          this.errors,
          0,
          'You need to enter a password, a password confirmation, an email, and confirm your email'
        );
      }
    },
  },
};
</script>
