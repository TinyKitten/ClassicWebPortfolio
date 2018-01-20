<template>
    <article class="content share">
      <div class="content-inner">
          <h3>Share</h3>
<a href="https://twitter.com/share?text=TinyKittenのウェブサイト&url=https://tinykitten.me/&hashtags=TinyKitten" onClick="window.open(encodeURI(decodeURI(this.href)), 'tweetwindow', 'width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;" rel="nofollow" class="twitter-link">
<img src="~assets/img/twitter-social.svg" alt="Twitter">
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
  font-size: 4rem;
  font-weight: lighter;
}

.twitter-link {
  margin-top: 32px;
  width: 120px;
  height: 120px;
}
</style>
