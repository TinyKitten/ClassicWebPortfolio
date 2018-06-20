<template>
  <section class="container">
    <img class="avatar" src="~/assets/icon.png" alt="TinyKitten">
    <h1 class="title">TinyKitten</h1>
    <p class="description">
      小学生の頃にプログラミングに興味を持ち、ITエンジニアの道へ進みスマートフォンアプリの開発企業に就職。<br>
      その後フロントエンドエンジニアの企業に転職し、<br>
      フロントエンド開発などの業務に従事していた。<br>
      TeamKittenというグループのリーダーをやってるらしい。
    </p>
    <div class="buttons">
      <app-button :negative="true" class="button" @click.native="forward('/')">戻る</app-button>
      <app-button class="button" @click.native="forward('/works/tinykitten-icon')">アイコンについて</app-button>
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
  height: 240px;
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
</style>
