<template>
  <main class="form-signin">
    <img src alt width="72" height="57" />
    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@examplecom" />
      <label for="floatingInput">Email Address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
      <label for="floatingPassword">Password</label>
    </div>
    <button clas="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
