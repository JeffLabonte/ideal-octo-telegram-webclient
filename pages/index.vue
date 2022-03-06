<template>
  <main class="form-signin">
    <img src alt width="72" height="57" />
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input
        id="floatingInput"
        v-model="email"
        class="form-control"
        type="email"
        placeholder="name@examplecom"
      />
      <label for="floatingInput">Email Address</label>
    </div>
    <div class="form-floating">
      <input
        id="floatingPassword"
        v-model="password"
        class="form-control"
        type="password"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div>
    <div class="container">
      <div class="row">
        <div class="column">
          <button @click="login" class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </div>
        <div class="column">
          <button class="w-100 btn btn-lg">
            <NuxtLink to="/register">Register new account</NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => {
    return {
      email: '',
      password: '',
      loginUrl: 'http://192.168.68.117/api/auth/login',
    };
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password,
      });
    },
  },
};
</script>
