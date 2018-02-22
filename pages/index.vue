<template>
  <section class="container">
    <header class="title">
      <h1 class="heading">TinyKitten</h1>
      <h2 class="role">Frontend Engineer</h2>
    </header>
    <ul class="works">
      <li class="product">
        <a href="" class="product">
        <img class="product-image" src="~assets/tinykitten.png" alt="TinyKitten">
        <div class="overlay">
          <h3 class="product-name">TinyKitten Icon</h3>
          <p class="product-description">TinyKittenのトレードマークです。</p>
        </div>
        </a>
      </li>
      <li class="product">
        <a href="https://teamkitten.tk" target="_blank" rel="noreferrer" class="product">
        <img class="product-image" src="~assets/teamkitten.png" alt="TeamKitten">
        <div class="overlay">
          <h3 class="product-name">TeamKitten</h3>
          <p class="product-description">「面白い」ことをしたい人が<br>集まるコミュニティです。</p>
        </div>
        </a>
      </li>
      <li class="product">
        <a href="https://near.tinykitten.me" target="_blank" rel="noreferrer" class="product">
        <img class="product-image" src="~assets/nearstation.png" alt="NearStation">
        <div class="overlay">
          <h3 class="product-name">NearStation</h3>
          <p class="product-description">近くの駅を表示する<br>Webアプリです。</p>
        </div>
        </a>
      </li>
      <li class="product">
        <a href="https://github.com/TinyKitten/Buisinesscard" target="_blank" rel="noreferrer" class="product">
        <img class="product-image" src="~assets/buisinesscard.png" alt="NearStation">
        <div class="overlay">
          <h3 class="product-name">Buisinesscard</h3>
          <p class="product-description">TinyKittenの名刺です。</p>
        </div>
        </a>
      </li>
    </ul>
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
  </section>
</template>

<script>

export default {
}
</script>

<style>
  .container {
    height: 100%;
  }
  .title {
    height: calc(62vh - 2px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    border-top: 2px solid #008FFE;
  }
  .heading {
    font-size: 2.5rem;
    line-height: 3.5rem;
    color: #333;
  }
  .role {
    font-size: 1rem;
    color: #555;
  }
  .works {
    display: flex;
    flex-wrap: wrap;
    min-height: 38vh;
    background: #f5f5f5;
  }
  .works .product {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 19vh;
    overflow: hidden;
    border: 1px solid #eee;
  }
  .works .product .overlay {
    opacity: 0;
    display: flex;
    background: rgba(0, 0, 0, .5);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .25s ease;
    text-align: center;
  }
  .works .product .overlay .product-name {
    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: bold;
  }
  .works .product .overlay .product-description {
    opacity: .75;
    font-size: .9rem;
    line-height: 1rem;
  }
  .works .product .product-image {
    display: block;
    max-width: 50%;
    max-height: 75%;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, .15));
  }
  .works .product:hover .overlay {
    opacity: 1;
  }

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
  a {
    color: #555;
  }
  .aboutme .content {
    color: #555;
    letter-spacing: 1px;
    line-height: 1.75rem;
  }
  @media (min-width: 800px) {
    .works .product .product-image {
      max-width: 75%;
      max-height:90%;
    }
    .works .product {
      width: 25vw;
      border: none;
    }
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
