<template>
  <section class="container">
    <header>
      <img class="logo" src="~assets/img/tinykitten.png">
    </header>
    <article class="content">
      <div class="content-inner">
            <img class="logo" src="~assets/img/tinykitten.png">
            <h1>TinyKitten</h1>
            <h2>群馬県在住のフロントエンドエンジニアです。</h2>
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    components: {},
    data () {
      return {
        online: true
      }
    },
    mounted () {
    },
    methods: {
    },
    destroyed () {
    }
  }
</script>

<style>
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 64px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .5);
  }
  header .logo {
    width: 48px;
    height: 48px;
  }
  .content {
    width: 100vw;
    height: calc(100vh - 64px);
    overflow: hidden;
    background: #008ffe;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: #fff;
  }
  .content-inner {
    width: 80vw;
  }
  .content .logo {
    width: 240px;
    height: 240px;
  }
  .content h1, .content h2 {
    margin: 0;
  }
  .content h1 {
    font-size: 3rem;
    font-weight: 200;
    margin-bottom: .5rem;
  }
  .content h2 {
    font-size: 1rem;
    font-weight: 300;
  }
</style>
