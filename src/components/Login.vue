<template>
  <main>
    <div>
      <h3 v-bind:class="errorTextObject">{{ error }}</h3>
      <input v-model="input.email" type="text" name="email" placeholder="Email" />
      <input v-model="input.password" type="password" name="password" placeholder="Password" />
      <button v-on:click="login()">Login</button>
      <router-link to="/register">
        <button>Need an account? Register</button>
      </router-link>
    </div>
  </main>
</template>

<script>
import axios from "axios";

const API_400_INVALID_CREDS_MESSAGE = "Unable to log in with provided credentials.";

const GENERIC_ERROR = "Unexpected Error! Please Contact Your SysAdmin! You :)";
const INVALID_CREDENTIALS = "The credentials you have provided are invalid. Please try again.";
const NO_CREDENTIALS = "Please enter your credentials.";

function getErrorMessage(response) {
  let non_field_errors = response.data.non_field_errors;
  switch (response.status) {
    case 400:
      if (non_field_errors[0] == API_400_INVALID_CREDS_MESSAGE) {
        return INVALID_CREDENTIALS;
      }
  }
  return GENERIC_ERROR;
}

export default {
  name: "login-component",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  computed: {
    errorTextObject: function () {
      return {
        active: this.error,
      };
    },
  },
  methods: {
    login: function () {
      if (this.input.email !== "" && this.input.password !== "") {
        // TODO Add environment variable to change those!
        axios({
          url: "http://backend:80/api/auth/login/",
          data: JSON.stringify({
            username: this.input.email,
            password: this.input.password,
          }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((result) => {
            if (result.status === 200) {
              console.log("Success");
            }
          })
          .catch((error) => {
            let response = error.response;
            this.error = getErrorMessage(response);
          });
      } else {
        this.error = NO_CREDENTIALS;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
