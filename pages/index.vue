<template>
  <section class="container">
    <header>
      <img class="logo" src="~assets/img/tinykitten.png" alt="TinyKitten">
    </header>
    <article class="content top">
      <div class="content-inner">
            <img class="logo" src="~assets/img/tinykitten.png" alt="TinyKitten">
            <h1>TinyKitten</h1>
            <h2>Frontend Engineer in Gunma Empire.</h2>
      </div>
    </article>
    <about></about>
    <workstl></workstl>
    <worksns></worksns>
    <share></share>
  </section>
</template>

<script>
  import about from '../components/about'
  import workstl from '../components/works-tl'
  import worksns from '../components/works-ns'
  import share from '../components/share'

  export default {
    components: {
      about,
      workstl,
      worksns,
      share
    },
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
    overflow: hidden;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
  }
  .top {
    text-align: center;
    flex-direction: column;
    height: calc(100vh - 64px);
    background: #008ffe;
  }
  .content-inner {
    width: 80vw;
  }
  .content .logo {
    width: 240px;
    height: 240px;
  }
  .content h1, .content h2 {
    margin-bottom: 1rem;
  }
  .content h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  .content h2 {
    font-weight: lighter;
  }
  .content p {
    line-height: 2rem;
  }
  .content h2 {
    font-size: 1rem;
    font-weight: 300;
  }
  @media (min-width: 800px) {
    .content h1 {
      font-size:rem;
    }
    .content p {
      line-height: 1.5rem;
    }
  }
</style>
