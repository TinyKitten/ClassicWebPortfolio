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
    <article class="content about">
      <div class="content-inner">
            <img class="logo" src="~assets/img/tinykitten.png" alt="TinyKitten">
            <div class="right">
              <h1>TinyKitten</h1>
              <p>
                群馬県在住の自称フロントエンドエンジニア。<br>
                Web開発とデザインとかが趣味だったり、<br>
                TimelineというSNSを開発してたりする。
              </p>
              <ul class="socials">
                <li>
                  <a href="https://twitter.com/tinykitten8" target="_blank">
                  <img class="social-icon" src="~assets/img/twitter-social.svg" alt="Twitter">
                  </a>
                </li>
                <li>
                  <a href="https://github.com/TinyKitten" target="_blank">
                  <img class="social-icon" src="~assets/img/github-social.svg" alt="Github">
                  </a>
                </li>
              </ul>
            </div>
        </div>
    </article>
      <article class="content works">
      <div class="content-inner">
        <a href="https://timeline.blue" target="_blank">
            <img class="img" src="~assets/img/tl.png" alt="TinyKitten">
          </a>
            <div class="right">
              <h1>Timeline</h1>
              <p>
                Twitterライクを目指すSNSです。
              </p>
            </div>
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
  .about {
    text-align: center;
    background: #333;
    height: 100vh;
  }
  .about .content-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .about .content-inner .right {
    margin-top: 32px;
  }
  .about .content-inner .right .socials {
    display: flex;
    padding: 0;
    list-style-type: none;
    justify-content: center;
  }
  .about .content-inner .right .socials .social-icon {
    width: 32px;
    margin-right: 18px;
  }
  .works {
    text-align: center;
    background: #fafafa;
    height: 100vh;
    color: #333;
  }
  .works .content-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .works .content-inner .img {
    width: 80vw;
    height: auto;
    box-shadow: 0 0 8px rgba(0, 0, 0, .5);
    border-radius: 4px;
  }
  .works .content-inner .right {
    margin-top: 32px;
    text-align: center;
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
    font-size: 4rem;
    font-weight: 200;
    margin-bottom: .5rem;
  }
  .content h2 {
    font-size: 1rem;
    font-weight: 300;
  }
  @media (min-width: 800px) {
    .about .content-inner {
      flex-direction: row;
      text-align: left;
    }
    .about .content-inner .right .socials {
      justify-content: flex-start;
    }
    .about .content-inner .right {
      margin-left: 64px;
    }
    .works .content-inner {
      flex-direction: row;
    }
    .works .content-inner .img {
      width: 40vw;
    }
    .works .content-inner .right {
      text-align: left;
      margin-left: 64px;
    }
  }
</style>
