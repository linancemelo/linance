<template>
  <!-- navBar -->
  <Navbar></Navbar>
  <div class="product-board">
    <ProductInfo></ProductInfo>
    <Caution></Caution>
    <OtherProduct></OtherProduct>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '../../components/front/Navbar.vue'
import ProductInfo from '../../components/front/ProductInfo.vue'
import Caution from '../../components/front/Caution.vue'
import OtherProduct from '../../components/front/OtherProduct'
import Footer from '../../components/front/Footer.vue'
import emitter from '@/methods/emitter'

export default {
  components: { Navbar, Caution, Footer, ProductInfo, OtherProduct },
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
.product-board{
  padding: 0 2.5rem;
}
@media screen and (max-width: 992px) {
  .product-board{
    padding: 0 1rem !important;
  }
}
</style>
