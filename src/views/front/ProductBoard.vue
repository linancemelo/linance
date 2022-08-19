<template>
  <!-- navBar -->
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

export default { components: { Navbar, Footer } };
</script>

<style scoped>
.navbar {
  padding: 8px 18px !important;
}
</style>
