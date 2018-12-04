<template>
  <article class="row">
    <Transition name="title-fade">
      <h2 v-if="visible" class="articleTitle">
        SKILLS
      </h2>
    </Transition>
    <div class="articleMain">
      <Transition name="languages-fade">
        <ul v-if="visible" class="languages">
          <li class="languageRow">
            <div class="languageImg">
              <img src="~/assets/marks/languages/vue.svg" alt="Vue.js">
            </div>
            <p class="languageName">
              Vue.js
            </p>
          </li>
          <li class="languageRow">
            <div class="languageImg">
              <img src="~/assets/marks/languages/react.svg" alt="React.js">
            </div>
            <p class="languageName">
              React.js
            </p>
          </li>
          <li class="languageRow">
            <div class="languageImg">
              <img src="~/assets/marks/languages/html5.svg" alt="HTML5">
            </div>
            <p class="languageName">
              HTML5
            </p>
          </li>
          <li class="languageRow">
            <div class="languageImg">
              <img src="~/assets/marks/languages/css3.svg" alt="CSS3">
            </div>
            <p class="languageName">
              CSS3
            </p>
          </li>
          <li class="languageRow">
            <div class="languageImg">
              <img src="~/assets/marks/languages/js.svg" alt="JavaScript">
            </div>
            <p class="languageName">
              JavaScript
            </p>
          </li>
          <li class="languageRow">
            <div class="languageImg">
              <img src="~/assets/marks/languages/go.svg" alt="Go">
            </div>
            <p class="languageName">
              Go
            </p>
          </li>
        </ul>
      </Transition>
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 48px;
  color: #555;
  background: #fcfcfc;
}
.articleTitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
}
.articleMain {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.languages {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.languageRow {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 32px;
}
.languageImg {
  background: #fff;
  padding: 24px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
}
.languageImg img {
  max-width: 100%;
  max-height: 100%;
}
.languageName {
  margin-top: 18px;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Animations */
.title-fade-enter-active,
.title-fade-leave-active {
  transition: all 1s 0s;
}

.title-fade-enter,
.title-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
}

.languages-fade-enter-active,
.languages-fade-leave-active {
  transition: all 1s 0.5s;
}

.languages-fade-enter,
.languages-fade-leave-to {
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
  .languageImg {
    padding: 24px;
  }
  .languageImg img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
