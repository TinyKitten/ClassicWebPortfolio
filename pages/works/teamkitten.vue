<template>
  <section class="container">
    <img class="avatar" src="~/assets/teamkitten.png" alt="TeamKitten">
    <h1 class="title">TeamKitten</h1>
    <h2 class="subtitle">「面白い」ことをしたい人が<br>
      集まるコミュニティです。
    </h2>
    <p class="description">
      面白いことは、この世に溢れているはず。
      その面白い事を、みんなで共有したい。分かち合いたい。
      エンジニア・デザイナーのLT大会をはじめ、
      楽しいことを追求していきたいと思っています。
    </p>
    <div class="buttons">
      <app-button :negative="true" class="button" @click.native="forward('/')">戻る</app-button>
    </div>
  </section>
</template>

<script>
import AppButton from '~/components/AppButton.vue';

export default {
  components: {
    AppButton,
  },
  methods: {
    forward(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 51px);
  flex-direction: column;
}
.avatar {
  width: 240px;
  height: auto;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
  transition: 0.25s;
  margin-bottom: 32px;
}
.avatar:hover {
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
}
.title {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #333;
}
.description {
  margin-top: 8px;
  text-align: center;
  line-height: 1.5;
  width: 80%;
}
.buttons {
  margin: 32px 0;
  display: flex;
}
.button {
  margin-right: 12px;
}
.button:last-child {
  margin-right: 0;
}
.subtitle {
  margin-top: 8px;
  letter-spacing: 2px;
  text-align: center;
}
</style>
