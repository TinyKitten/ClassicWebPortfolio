<template>
  <section class="container">
    <app-top-article />
    <app-about-me-article />
    <app-skill-article />
    <app-works-article />
    <app-contact-article />
  </section>
</template>

<script>
import AppTopArticle from '~/components/AppTopArticle.vue';
import AppAboutMeArticle from '~/components/AppAboutMeArticle.vue';
import AppSkillArticle from '~/components/AppSkillArticle.vue';
import AppWorksArticle from '~/components/AppWorksArticle.vue';
import AppContactArticle from '~/components/AppContactArticle.vue';

export default {
  components: {
    AppTopArticle,
    AppAboutMeArticle,
    AppWorksArticle,
    AppSkillArticle,
    AppContactArticle,
  },
};
</script>

<style scoped>
</style>
