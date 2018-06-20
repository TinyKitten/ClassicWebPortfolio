<template>
  <section class="errorContainer">
    <h1 v-if="error.statusCode === 404" class="errorMessage">ページが見つかりませんでした。</h1>
    <h1 v-else class="errorMessage">エラーが発生しました。</h1>
    <nuxt-link class="topLink" to="/"><app-button>トップへ戻る</app-button></nuxt-link>
  </section>
</template>

<script>
import AppButton from '~/components/AppButton.vue';

export default {
  components: {
    AppButton,
  },
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.topLink {
  text-decoration: none;
}
.errorContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 51px);
}
.errorMessage {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 32px;
}
</style>
