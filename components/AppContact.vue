<template>
  <div class="row">
    <transition name="title-fade">
      <h2 v-if="visible" class="articleTitle">CONTACT</h2>
    </transition>
    <transition name="title-fade">
      <iframe
        v-if="visible"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfk-T44goScQGCIlV8t_5RB1xK8L6v5ErtEVlnwUPjA-Dr3WA/viewform?embedded=true"
        width="640"
        height="1079"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        読み込んでいます...
      </iframe>
    </transition>
  </div>
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
.articleTitle {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
}
/* Oppa PC Style */
@media (min-width: 800px) {
  .articleTitle {
    margin-bottom: 64px;
  }
}
</style>
