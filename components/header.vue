<template>
    <header class="title">
      <h1 class="heading">TinyKitten</h1>
      <h2 class="role">Frontend Engineer</h2>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
  .title {
    height: calc(62vh - 2px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    border-top: 2px solid #008FFE;
  }
  .heading {
    font-size: 2.5rem;
    line-height: 3.5rem;
    color: #333;
  }
  .role {
    font-size: 1rem;
    color: #555;
  }
</style>
