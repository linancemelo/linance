<template>
  <Navbar></Navbar>
  <StoreMainPic></StoreMainPic>
  <ProductList></ProductList>
  <Footer></Footer>
</template>

<script>
import StoreMainPic from "@/views/front/StoreMainPic.vue";
import ProductList from "@/views/front/ProductList.vue";
import Navbar from "./Navbar.vue";
import Footer from "@/views/front/Footer.vue";

export default {
  components: {
    StoreMainPic,
    ProductList,
    Navbar,
    Footer,
  },
  methods: {},
};
</script>

<style scoped>
.navbar {
  padding: 8px 18px !important;
}
</style>
