<template>
    <article class="tinykittenicon">
        <img class="tinykitten" src="~assets/tinykitten.png" alt="TinyKitten" :class="{ showImg: visible }">
        <div class="text" :class="{ showText: visible }">
            <h2 class="name">TinyKitten Icon</h2>
            <h3 class="copy">TinyKittenのトレードマークです。</h3>
            <p class="content">
                ギリシア文字のΑとΑを組み合わせたシンプルなアイコンは、<br>TinyKittenのトレードマークです。<br>
                一つ一つのΑには、一つの要素を意味しています。<br>
                要素を組み合わせて、大きなものを作りたい。<br>という願いが込められています。
            </p>
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
.tinykittenicon {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
.tinykittenicon .tinykitten {
  width: 50vw;
  transition: 0.25s;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}
.tinykittenicon .name {
  font-size: 2.5rem;
  color: #555;
  margin: 1rem 0 .75rem 0;
}
.tinykittenicon .copy {
  color: #555;
  font-size: 1.15rem;
  margin: 1rem 0;
  font-weight: bold;
  line-height: 1.5rem;
}
.tinykittenicon .content {
  color: #555;
  letter-spacing: 1px;
  line-height: 1.5rem;
  font-size: .9rem;
}

.tinykitten,
.text {
  opacity: 0;
  transform: translateY(100px);
}

a {
  color: #555;
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
  .tinykittenicon {
    flex-direction: row;
    text-align: left;
  }
  .tinykittenicon .tinykitten {
    width: 240px;
    margin-right: 72px;
  }
  .tinykittenicon .copy {
    font-size: 1.15rem;
  }
  .tinykittenicon .content {
    font-size: 1rem;
  }
  .tinykittenicon .tinykitten:hover {
    filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
  }
}
</style>
