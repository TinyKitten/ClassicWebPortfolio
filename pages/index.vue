<template>
  <section class="container">
    <div class="hero">
      <img class="avatar" src="~/assets/icon.png" alt="TinyKitten">
      <h1 class="title">TinyKitten</h1>
      <h2 class="role">FRONTEND ENGINNER</h2>
      <ul class="socials">
        <li class="social-item">
          <a href="https://twitter.com/tinykitten8" target="_blank" rel="noopener noreferrer" class="social-link"><img src="~/assets/icons/twitter.png" alt="twitter"></a>
        </li>
        <li class="social-item">
          <a href="https://github.com/tinykitten" target="_blank" rel="noopener noreferrer" class="social-link"><img src="~/assets/icons/github.png" alt="github"></a>
        </li>
        <li class="social-item">
          <a href="https://goo.gl/forms/4R6sOefWZ5rTIBGf1" target="_blank" rel="noopener noreferrer" class="social-link"><img src="~/assets/icons/mail.png" alt="contact"></a>
        </li>
      </ul>

    </div>
    <div class="tile">
      <div class="item" @click="forwardToWorks('me')">
        <img class="icon" src="~/assets/icon.png" alt="Me">
        <p class="description">
          Me
        </p>
      </div>
      <div class="item" @click="forwardToWorks('teamkitten')">
        <img class="icon" src="~/assets/teamkitten.png" alt="TeamKitten">
        <p class="description">
          TeamKitten
        </p>
      </div>
      <div class="item" @click="forwardToWorks('businesscard')">
        <img class="icon" src="~/assets/businesscard.png" alt="Businesscard">
        <p class="description">
          Businesscard
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    forwardToWorks(path) {
      this.$router.push(`/works/${path}`);
    },
  },
};
</script>

<style scoped>
.hero {
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 51px - 120px);
}
.hero .avatar {
  width: 240px;
  height: 240px;
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
  transition: 0.25s;
  margin-bottom: 32px;
}
.hero .avatar:hover {
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.5));
}
.hero .title {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #333;
}
.hero .role {
  margin-top: 8px;
  letter-spacing: 2px;
}
.tile {
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
  background: #f5f5f5;
}
.tile .item {
  flex: 1;
  min-width: 100%;
  height: 120px;
  transition: 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0.25px solid #efefef;
  flex-direction: column;
  position: relative;
}
.tile .item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.tile .item .icon {
  max-width: 75%;
  max-height: 75%;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.25));
}
.tile .item .description {
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  width: 100%;
  height: 48px;
  text-align: center;
  line-height: 48px;
  opacity: 0;
  transition: 0.25s;
}
.tile .item:hover .description {
  opacity: 1;
}

.socials {
  margin-top: 12px;
  display: flex;
}
.social-item {
  margin-right: 12px;
}
.social-item:last-child {
  margin-right: 0px;
}
.social-link img {
  height: 32px;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Oppa PC Style */
@media (min-width: 800px) {
  .tile .item {
    flex: 0.25;
    min-width: 25vw;
  }
}
</style>
