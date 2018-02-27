<template>
    <article class="aboutme">
        <img class="tinykitten" src="~assets/tinykitten.png" alt="TinyKitten">
        <div class="text">
                  <h2 class="name">TinyKitten</h2>
        <p class="content">
          Web系をこよなく愛する自称フロントエンドエンジニアです。<br>
          岡山の県北ではなく群馬県在住。<br>
          <a href="https://twitter.com/tinykitten8" target="_blank" rel="noreferrer">Twitter</a>やってます。
        </p>
        </div>
    </article>
</template>

<script>
export default {

};
</script>

<style scoped>
  .aboutme {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
  .aboutme .tinykitten {
    width: 50vw;
    transition: .25s;
    filter: drop-shadow(0 0 4px rgba(0,0,0, .25));
  }
  .aboutme .name {
    font-size: 2rem;
    color: #555;
    margin: 1rem 0;
  }
  .aboutme .content {
    color: #555;
    letter-spacing: 1px;
    line-height: 1.75rem;
  }
  @media (min-width: 800px) {
    .aboutme {
      flex-direction: row;
      text-align: left;
    }
    .aboutme .tinykitten {
      width: 240px;
      margin-right: 72px;
    }
    .aboutme .tinykitten:hover {
      filter: drop-shadow(0 0 8px rgba(0, 0, 0, .5));
    }
  }
</style>
