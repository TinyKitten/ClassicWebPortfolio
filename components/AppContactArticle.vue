<template>
  <article class="row">
    <div class="articleMain">
      <Transition name="projects-fade">
        <div
          v-if="visible"
          class="form">
          <script src="https://sdk.form.run/js/v2/embed.js" />
          <div
            class="formrun-embed"
            data-formrun-form="@tinykitten8"
            data-formrun-redirect="true" />
        </div>
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
  padding: 48px 24px;
  color: #555;
  background: #fefefe;
}
.articleMain {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.projects {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}

.projectsRow {
  margin-bottom: 24px;
}
.projectsRow:last-child {
  margin-bottom: 0;
}

.projectLink {
  text-decoration: none;
}
.projectImg {
  max-width: 100%;
  height: auto;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.projectTitle {
  color: #aaa;
  text-align: center;
  margin-top: 4px;
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

.projects-fade-enter-active,
.projects-fade-leave-active {
  transition: all 1s 0.5s;
}

.projects-fade-enter,
.projects-fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 32px, 0);
}

/* Oppa PC Style */
@media (min-width: 800px) {
  .row {
    padding: 48px;
  }
  .articleMain {
    flex-direction: row;
  }
  .articleTitle {
    margin-bottom: 64px;
  }
}
</style>
