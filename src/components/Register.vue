<template>
  <form
    id="register"
    @submit="checkForm"
    action="http://backend:80/api/atuh/registration"
    method="post"
  >
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        {{ errors  }}
      </ul>
    </p>
    <div id="email-box">
      <p>
        <label for="email">Please enter your email:</label>
        <input id="email" v-model="input.email" type="email" name="email" placeholder="you@company.com" />
      </p>

      <p>
        <label for="email-confirmation">Please confirm your email:</label>
        <input id="email-confirmation" v-model="input.emailConfirmation" type="email" name="email-confirmation" placeholder="you@acompany.com" />
      </p>
    </div>
    <div>
      <p>
        <label for="password">Please enter your pasword:</label>
        <input id="password" v-model="input.password" type="password" name="password" placeholder="Th1s!M1gHt!@Be%4@G00d$1dea:)"/>
      </p>
      <p>
        <label for="password-confirmation">Confirm it please, just in case:</label>
        <input id="password-confirmation" v-model="input.passwordConfirmation" type="password" placeholder="0r!Th1s(:"/>
      </p>
    </div>
    <p>
      <label for=""></label>
      <input />
    </p>
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
};
</script>

<style></style>
