<template>
  <section class="container">
    <AppTopArticle />
    <AppAboutMeArticle />
    <AppSkillArticle />
    <AppWorksArticle />
    <AppContact />
  </section>
</template>

<script>
import AppTopArticle from '~/components/AppTopArticle.vue';
import AppAboutMeArticle from '~/components/AppAboutMeArticle.vue';
import AppSkillArticle from '~/components/AppSkillArticle.vue';
import AppWorksArticle from '~/components/AppWorksArticle.vue';
import AppContact from '~/components/AppContact.vue';

export default {
  components: {
    AppTopArticle,
    AppAboutMeArticle,
    AppWorksArticle,
    AppSkillArticle,
    AppContact,
  },
};
</script>

<style scoped>
</style>
