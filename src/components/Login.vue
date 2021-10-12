<template>
    <main>
    <div>
        <input v-model="input.username" type="text" name="username" placeholder="Username" \>
        <input v-model="input.password" type="password" name="password" placeholder="Password" \>
        <button v-on:click="login()">Login</button>
    </div>
    </main>
</template>

<script>
export default {
  name: 'Login',
  data() {
      return {
          "input": {
              "username": "",
              "password": "",
            }
        }
    },
    methods: {
        login() {
            if (this.input.username !== "" && this.input.password !== ""){
                console.log("Ready for some data")
            } 
            else 
            {
                console.log("This is not good")
            }
        },
    }
}
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
