<template>
    <article class="content share">
      <div class="content-inner">
          <h3>シェアしよう</h3>
<a href="https://twitter.com/share?text=TinyKittenのウェブサイト&url=https://tinykitten.me/&hashtags=TinyKitten" onClick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;" rel="nofollow" class="twitter-link">
Twitter
</a>

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
.share {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #00aced;
}
.share .content-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.share .content-inner h3 {
  font-size: 3rem;
  font-weight: bold;
}

.share .content-inner .twitter-link {
  font-size: 2rem;
  color: #fff;
  text-decoration: none;
  padding: 24px;
  border-radius: 8px;
  margin-top: 48px;
  font-weight: bold;
  box-shadow: 0 0 12px rgba(0, 0, 0, .25);
  transition: .25s;
}

.share .content-inner .twitter-link:hover {
    box-shadow: 0 0 24px rgba(0, 0, 0, .25);
}
</style>
