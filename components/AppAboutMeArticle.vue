<template>
  <article id="aboutme" class="row">
    <transition name="title-fade">
      <h2 v-if="visible" class="articleTitle">ABOUT ME</h2>
    </transition>
    <div class="articleMain">
      <transition name="avatar-fade">
        <img v-if="visible" class="avatar" src="~/static/icon.png" alt="TinyKitten">
      </transition>
      <transition name="paragraph-fade">
        <div v-if="visible" class="paragraph">
          <h1 class="name">TinyKitten</h1>
          <p class="bio">
            群馬県伊勢崎市在住のフリーの<br>フロントエンドエンジニア。<br>
            タイニーキトゥンと読みます。
          </p>
          <ul class="marks">
            <li class="mark">
              <a href="https://twitter.com/tinykitten8" target="_blank" rel="noreferrer noopener">
                <img class="markImgTwitter" src="~/assets/marks/twitter.png" alt="twitter(@tinykitten8)">
              </a>
            </li>
            <li class="mark">
              <a href="https://fb.com/TinyKitten8" target="_blank" rel="noreferrer noopener">
                <img class="markImgFacebook" src="~/assets/marks/facebook.png" alt="Facebook(TinyKitten)">
              </a>
            </li>
            <li class="mark">
              <a href="https://github.com/TinyKitten" target="_blank" rel="noreferrer noopener">
                <img class="markImgGitHub" src="~/assets/marks/github.png" alt="GitHub(@TinyKitten)">
              </a>
            </li>
            <li class="mark">
              <a href="https://www.wantedly.com/users/62400885" target="_blank" rel="noreferrer noopener">
                <img class="markImgWantedly" src="~/assets/marks/wantedly.png" alt="Wantedly(62400885)">
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if (!this.visible) {
        const top = this.$el.getBoundingClientRect().top;
        this.visible = top < window.innerHeight / 2;
      }
    },
  },
};
</script>

<style scoped>
.row {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px;
  color: #555;
}
.articleTitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
}
.articleMain {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.avatar {
  border-radius: 100%;
  border: 2px solid #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  width: 180px;
  height: 180px;
}
.paragraph {
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  text-align: center;
}
.name {
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.25;
}
.bio {
  margin-top: 16px;
  margin-bottom: 8px;
}
.heading {
  font-weight: bold;
  margin-top: 12px;
  margin-bottom: 8px;
}
.marks {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  flex-wrap: wrap;
}
.mark {
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.markImgTwitter {
  width: 48px;
  height: 48px;
  margin: 0 -8px;
}
.markImgGitHub {
  width: 32px;
  height: 32px;
}
.markImgFacebook {
  width: 28px;
  height: 28px;
}
.markImgWantedly {
  width: 32px;
  height: 32px;
  margin: 0 -8px;
}

/* Animation */
.title-fade-enter-active,
.title-fade-leave-active {
  transition: all 1s 0s;
}

.title-fade-enter,
.title-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
}

.avatar-fade-enter-active,
.avatar-fade-leave-active {
  transition: all 1s 0.25s;
}

.avatar-fade-enter,
.avatar-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
}

.paragraph-fade-enter-active,
.paragraph-fade-leave-active {
  transition: all 1s 0.5s;
}

.paragraph-fade-enter,
.paragraph-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
}

/* Oppa PC Style */
@media (min-width: 800px) {
  .articleMain {
    flex-direction: row;
  }
  .articleTitle {
    margin-bottom: 64px;
  }
  .avatar {
    width: 240px;
    height: 240px;
  }
  .paragraph {
    margin-left: 32px;
    margin-top: 0;
    text-align: left;
  }
  .marks {
    justify-content: flex-start;
  }
  .mark {
    margin-right: 12px;
    margin-left: 0;
  }
}
</style>
