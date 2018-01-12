<template>
      <article class="content works-tl">
      <div class="content-inner">
        <a href="https://timeline.blue" target="_blank">
            <img class="img" src="~assets/img/tl.png" alt="TinyKitten">
          </a>
            <div class="right">
              <h1>Timeline</h1>
              <p>
                Twitterライクを目指すSNSです。<br>
                現在開発中。
              </p>
            </div>
      </div>
    </article>
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
  .works-tl {
    text-align: center;
    background: #607D8B;
    height: 100vh;
    color: #fff;
  }
  .works-tl .content-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .works-tl .content-inner .img {
    width: 80vw;
    height: auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, .5);
    border-radius: 4px;
  }
  .works-tl .content-inner .right {
    margin-top: 32px;
    text-align: center;
  }
  @media (min-width: 800px) {
    .works-tl .content-inner {
      flex-direction: row;
    }
    .works-tl .content-inner .img {
      width: 40vw;
    }
    .works-tl .content-inner .right {
      text-align: left;
      margin-left: 64px;
    }
  }
</style>
