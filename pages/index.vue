<template>
  <section class="container">
    <page-header />
    <works />
    <about-me />
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
</style>
