<template>
  <section class="container">
    <el-carousel :interval="5000" arrow="always" height="100vh">
      <el-carousel-item>
        <div class="slide first">
          <img class="logo" src="~assets/icon.png" alt="tinykitten">
          <h2 class="title">TinyKitten</h2>
          <h3 class="subtitle">Frontend Engineer</h3>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="slide first">
          <img class="teamkitten-logo" src="~assets/teamkitten.png" alt="teamkitten">
          <h3 class="subtitle">「面白い」ことをしたい人が集まる<br>コミュニティです。</h3>
          <a class="link-button" href="https://teamkitten.tk/">更に詳しく</a>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="slide trivia">
          <div class="trivia-inner">
            <h2 class="trivia-appname">Trivia</h2>
            <h3 class="trivia-subtitle">つながるトリビア、はじめよう</h3>
            <p class="trivia-description">
              Triviaは、トリビアでつながるSNS。<br>
              さあ、トリビアの世界へ飛び込もう。
            </p>
            <a class="link-button" href="https://trivia.teamkitten.tk/">更に詳しく</a>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="slide businesscard">
          <img class="businesscard-img" src="~assets/businesscard.png" alt="businesscard">
          <h3 class="businesscard-subtitle">TinyKittenの名刺</h3>
          <p class="businesscard-description">
            ティッシュ代わりや、公衆トイレに紙がなかったとき、あぶらとり紙としてご活用いただけます。
          </p>
        </div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.slide {
  height: 100vh;
  color: #fff;
}
.first {
  background: #008ffe;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.logo {
  width: 240px;
  height: 240px;
}
.title {
  font-size: 3rem;
}
.subtitle {
  margin-top: 8px;
  line-height: 1.5rem;
  font-size: 1.25rem;
}
.trivia {
  background: url('~assets/trivia-bg.jpg') no-repeat center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.trivia-appname {
  font-size: 4rem;
  font-weight: bold;
}
.trivia-subtitle {
  font-size: 0.75rem;
  font-weight: bold;
}
.trivia-description {
  line-height: 1.5;
  font-size: 0.75rem;
  margin-top: 24px;
  font-weight: bold;
}
.link-button {
  display: inline-block;
  margin-top: 24px;
  border-radius: 4px;
  padding: 11px 18px;
  border: 1px solid #fff;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}
.teamkitten-logo {
  width: 320px;
  max-width: 75%;
  margin-bottom: 24px;
}
.businesscard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #333;
  text-align: center;
  color: #ffffff;
}
.businesscard-img {
  width: 320px;
  max-width: 75%;
  margin-bottom: 24px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
}
.businesscard-subtitle {
  font-size: 1.5rem;
}
.businesscard-description {
  margin-top: 12px;
  width: 85%;
  line-height: 1.25;
}
</style>
