<template>
      <article class="content works-ns">
      <div class="content-inner">
        <a href="https://near.tinykitten.me/" target="_blank">
            <img class="img" src="~assets/img/ns.png" alt="TinyKitten">
          </a>
            <div class="right">
              <h1>NearStation</h1>
              <p>
                現在地に一番近い駅を教えてくれます。<br>
                Twitterでシェアもできます。
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
  .works-ns {
    text-align: center;
    background: #2196F3;
    height: 100vh;
    color: #fff;
  }
  .works-ns .content-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .works-ns .content-inner .img {
    max-height: 50vh;
    object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, .5));
    border-radius: 4px;
  }
  .works-ns .content-inner .right {
    margin-top: 32px;
    text-align: center;
  }
  @media (min-width: 800px) {
    .works-ns .content-inner {
      flex-direction: row;
    }
    .works-ns .content-inner .img {
      width: 40vw;
      max-height: 60vh;
    }
    .works-ns .content-inner .right {
      text-align: left;
      margin-left: 64px;
    }
  }
</style>
