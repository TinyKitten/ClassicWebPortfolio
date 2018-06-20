<template>
  <header class="header">
    <router-link to="/">
      <img class="logo" src="~/assets/icon.png" alt="TinyKitten">
    </router-link>

    <router-link class="link active" to="/">Site</router-link>
    <a href="https://blog.tinykitten.me/" target="_blank" rel="noopener noreferrer" class="link">Blog</a>
    <a href="https://twitter.com/tinykitten8" target="_blank" rel="noopener noreferrer" class="link">Twitter</a>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  padding: 8px 32px;
  justify-content: center;
}
.link {
  display: none;
}
.logo {
  width: 32px;
  height: 32px;
  filter: drop-shadow(0 0 2px rgba(0, 143, 254, 0.25));
}

@media (min-width: 800px) {
  .header {
    justify-content: flex-start;
  }
  .link,
  .link a {
    color: #333;
    margin-left: 21px;
    text-decoration: none;
    display: inline;
  }
  .active,
  .active a {
    color: #008ffe;
    filter: drop-shadow(0 0 1px rgba(0, 143, 254, 0.25));
  }
}
</style>
