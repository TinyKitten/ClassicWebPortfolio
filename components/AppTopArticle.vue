<template>
  <article class="container">
    <img class="logo" src="~/assets/icon.svg" alt="TinyKitten">
    <h1 class="heading1">
      TinyKitten
    </h1>
    <h2 class="heading2">
      Frontend Engineer/Designer
    </h2>
    <a v-smooth-scroll="{ duration: 1000 }" class="arrowLink" href="#aboutme">
      <img src="~/assets/arrow.svg" alt="Arrow">
    </a>
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3d(0, 32px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes arrow {
  from {
    opacity: 0;
    transform: translate3d(0, -32px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
}
.logo {
  width: 120px;
  height: 120px;
  border: 4px solid #fff;
  border-radius: 100%;
  animation: 1s fadeIn 0s forwards;
  opacity: 0;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
}
.heading1 {
  margin-top: 18px;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0;
  animation: 1s fadeIn 0.5s forwards;
}
.heading2 {
  color: #555;
  margin-top: 8px;
  opacity: 0;
  animation: 1s fadeIn 0.75s forwards;
}
.arrowLink {
  position: absolute;
  width: 48px;
  height: auto;
  bottom: 32px;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;
  animation: 1s arrow 1s forwards;
}
</style>
