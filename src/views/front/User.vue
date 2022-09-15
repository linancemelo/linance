<template>
  <Navbar></Navbar>
    <!-- 麵包屑模塊 -->
  <div class="container-fluid">
    <ul class="step d-flex justify-content-center">
      <li class="step-item mx-3 fs-8">
        <p class="text-center rounded-circle" :class="{'active-top': path==='cart'}">1</p>
        <span :class="{'active-bottom': path==='cart'}">確認商品</span>
      </li>
      <li class="step-item mx-3 fs-8">
        <p class="text-center rounded-circle" :class="{'active-top': path==='userinfo'}">2</p>
        <span :class="{'active-bottom': path==='userinfo'}">填寫資料</span>
      </li>
      <li class="step-item mx-3 fs-8">
        <p class="text-center rounded-circle" :class="{'active-top': path==='order'}">3</p>
        <span :class="{'active-bottom': path==='order'}">完成訂單</span>
      </li>
    </ul>
  </div>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/front/Footer.vue'
import Navbar from '@/components/front/Navbar.vue'
import emitter from '@/methods/emitter'

export default {
  components: { Navbar, Footer },
  data () {
    return {
      path: ''
    }
  },
  provide () {
    return {
      emitter
    }
  },
  watch: {
    $route (to, from) {
      this.path = this.$route.path.split('/')[2]
    }
  },
  created () {
    this.path = 'cart'
  }
}
</script>

<style scoped src="../../assets/css/front/user.css">

</style>
