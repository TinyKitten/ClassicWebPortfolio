<template>
  <section class="container">
    <page-header />
    <works />
    <about-me />
    
    <!-- works list -->
    <tiny-kitten-icon />
    <team-kitten />
    <near-station />
    <buisiness-card />

    <footer class="footer">
      <span class="copyright">Copyright &copy; 2018 TinyKitten</span>
    </footer>
  </section>
</template>

<script>
import PageHeader from '../components/header';
import AboutMe from '../components/aboutme';
import Works from '../components/works';

import TinyKittenIcon from '../components/works-single/tinykitten';
import TeamKitten from '../components/works-single/teamkitten';
import NearStation from '../components/works-single/nearstation';
import BuisinessCard from '../components/works-single/buisinesscard';

export default {
  components: {
    PageHeader,
    AboutMe,
    Works,
    TinyKittenIcon,
    TeamKitten,
    NearStation,
    BuisinessCard,
  },
};
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
