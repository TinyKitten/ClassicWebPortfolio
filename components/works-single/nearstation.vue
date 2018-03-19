<template>
    <article class="nearstation">
        <img class="tinykitten" src="~assets/nearstation.png" alt="TinyKitten" :class="{ showImg: visible }">
        <div class="text" :class="{ showText: visible }">
            <h2 class="name">NearStation</h2>
            <h3 class="copy">近くの駅を表示するWebアプリです。</h3>
            <p class="content">
                PWAアプリ開発の練習用として開発されたものです。<br>
                近くの駅の名前と距離を教えてくれます。
            </p>
            <a href="https://near.tinykitten.me" class="link" target="_blank">使ってみる</a>
        </div>
    </article>
</template>

<script>
export default {
  data() {
    return {
      posY: 0,
      visible: false,
    };
  },
  watch: {
    '$window.height': this.getPosition,
  },
  methods: {
    getPosition() {
      this.posY =
        this.$el.getBoundingClientRect().top +
        window.pageYOffset -
        document.documentElement.clientHeight +
        500;
    },
    handleScroll() {
      const scroll = window.scrollY;
      if (this.posY < scroll) {
        this.visible = true;
      }
    },
  },
  mounted() {
    this.getPosition();
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.nearstation {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.nearstation .tinykitten {
  width: 50vw;
  transition: 0.25s;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}
.nearstation .name {
  font-size: 2.5rem;
  color: #555;
  margin: 1rem 0 0.75rem 0;
}
.nearstation .copy {
  color: #555;
  font-size: 1.15rem;
  margin: 1rem 0;
  line-height: 1.5rem;
  font-weight: bold;
}
.nearstation .content {
  color: #555;
  letter-spacing: 1px;
  line-height: 1.5rem;
  font-size: 0.9rem;
}

.tinykitten,
.text {
  opacity: 0;
  transform: translateY(100px);
}

a {
  color: #555;
}

.link {
  display: inline-block;
  text-decoration: none;
  border: 1px solid #555;
  padding: 8px;
  margin-top: 12px;
  background: #fff;
  box-shadow: 0 0 8px rgb(0, 0, 0, 0.1);
  transition: 0.25s;
}

/* ぶわーっとするやつ */
@keyframes showAnimation {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.showImg {
  animation: showAnimation 0.5s ease forwards;
}
.showText {
  animation: showAnimation 0.5s 0.25s ease forwards;
}

@media (min-width: 800px) {
  .nearstation {
    flex-direction: row;
    text-align: left;
  }
  .nearstation .tinykitten {
    width: 240px;
    margin-right: 72px;
  }
  .nearstation .copy {
    font-size: 1.15rem;
  }
  .nearstation .content {
    font-size: 1rem;
  }
  .nearstation .tinykitten:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
  }
  .link:hover {
    box-shadow: 0 0 8px rgb(0, 0, 0, 0.25);
  }
}
</style>
