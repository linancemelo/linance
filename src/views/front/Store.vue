<template>
  <Navbar ref="navbar"></Navbar>
  <StoreMainPic ref="mainPic"></StoreMainPic>
  <ProductList :height="height"></ProductList>
  <Footer></Footer>
</template>

<script>
import StoreMainPic from '@/views/front/StoreMainPic.vue'
import ProductList from '@/views/front/ProductList.vue'
import Navbar from './Navbar.vue'
import Footer from '@/views/front/Footer.vue'
export default {
  components: {
    StoreMainPic,
    ProductList,
    Navbar,
    Footer
  },
  data () {
    return {
      height: 0
    }
  },
  methods: {
    getHeight () {
      const navbarHeight = this.$refs.navbar.$el.clientHeight
      const mainPicHeight = this.$refs.mainPic.$el.nextElementSibling.clientHeight
      this.height = navbarHeight + mainPicHeight
      console.log(this.height)
    }
  },
  mounted () {
    this.getHeight()
  }

}
</script>

<style scoped>
.navbar {
  padding: 8px 18px !important;
}
</style>
