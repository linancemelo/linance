<template>
  <!-- navBar -->
  <Navbar></Navbar>
  <ProductInfo></ProductInfo>
  <Caution></Caution>
  <Footer></Footer>
</template>

<script>
import Navbar from './Navbar.vue'
import Caution from './Caution.vue'
import Footer from './Footer.vue'
import ProductInfo from './ProductInfo.vue'
import emitter from '@/methods/emitter'

export default {
  components: { Navbar, Caution, Footer, ProductInfo },
  provide () {
    return {
      emitter
    }
  },
  created () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.navbar {
  padding: 8px 18px !important;
}
</style>
