<template>
  <Navbar ref="navbar"></Navbar>
  <StoreMainPic ref="mainPic"></StoreMainPic>
  <ProductList :height="height" ref="productArea"></ProductList>
  <Footer></Footer>
</template>

<script>
import StoreMainPic from '@/components/front/StoreMainPic.vue'
import ProductList from '@/components/front/ProductList.vue'
import Navbar from '../../components/front/Navbar.vue'
import Footer from '@/components/front/Footer.vue'
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
    // getHeight () {
    //   const navbarHeight = this.$refs.navbar.$el.clientHeight
    //   const mainPicHeight = this.$refs.mainPic.$el.nextElementSibling.clientHeight
    //   this.height = navbarHeight + mainPicHeight
    // }
  }
  // mounted () {
  //   this.getHeight()
  // }

}
</script>

<style scoped>
</style>
