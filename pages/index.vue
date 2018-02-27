<template>
  <section class="container">
    <page-header />
    <works />
    <about-me />
    <footer class="footer">
      <span class="copyright">Copyright &copy; 2018 TinyKitten</span>
    </footer>
  </section>
</template>

<script>
import PageHeader from '../components/header';
import AboutMe from '../components/aboutme';
import Works from '../components/works';

export default {
  components: {
    PageHeader,
    AboutMe,
    Works,
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .footer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    height: 64px;
    color: #aaa;
    line-height: 1.5rem;
    font-family: sans-serif;
  }
</style>
