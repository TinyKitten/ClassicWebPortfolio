<template>
  <article class="row">
    <Transition name="title-fade">
      <h2 v-if="visible" class="articleTitle">
        WORKS
      </h2>
    </Transition>
    <div class="articleMain">
      <Transition name="projects-fade">
        <ul v-if="visible" class="projects">
          <li class="projectsRow">
            <a class="projectLink" href="https://teamkitten.tk/" target="_blank" rel="noreferrer noopener">
              <img class="projectImg" src="~/assets/works/teamkittenmembers.png" alt="TeamKitten Website">
              <p class="projectTitle">
                TeamKitten Website
              </p>
            </a>
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
  background: #fefefe;
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
  .articleMain {
    flex-direction: row;
  }
  .articleTitle {
    margin-bottom: 64px;
  }
}
</style>
