<template>
  <Loading :active="isLoading"></Loading>
  <Navbar></Navbar>
  <div class="container-fluid main">
    <!-- card模塊 -->
    <div class="card" data-aos="zoom-in">
      <img src="https://electrek.co/wp-content/uploads/sites/3/2021/06/Tesla-elon-musk-hero.jpg?quality=82&strip=all&w=1600" class="card-img img-fluid" alt="...">
      <div class="card-img-overlay text-white d-flex justify-content-center align-items-center">
        <h6 class="fs-5">關於Linance /</h6>
        <h1 class="ms-2">{{title}}</h1>
      </div>
    </div>
    <div class="intro row">
      <div class="sidebar col-md-2">
        <ul>
          <li class="mb-4">
            <router-link
              to="/about/aboutus"
              class="btn-link"
              >關於我們</router-link>
          </li>
          <li class="mb-4">
            <router-link
              to="/about/team"
              class="btn-link"
              >團隊成員</router-link>
          </li>
          <li class="mb-4">
            <router-link
              to="/about/contact"
              class="btn-link"
              >聯絡方式</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from '../../components/front/Navbar.vue'
import Footer from '../../components/front/Footer.vue'

export default {
  components: { Navbar, Footer },
  data () {
    return {
      path: '',
      title: '',
      isLoading: false
    }
  },
  watch: {
    $route (to, from) {
      this.path = this.$route.path.split('/')[2]
      this.changeTitle()
    }
  },
  methods: {
    changeTitle () {
      switch (this.path) {
        case 'aboutus': this.title = '關於我們'
          break
        case 'team': this.title = '團隊成員'
          break
        case 'contact': this.title = '聯絡我們'; this.isLoading = true
          break
      }
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  },
  created () {
    this.path = window.location.hash.split('/')[2]
    this.changeTitle()
  }
}
</script>

<style scoped src="../../assets/css/front/about.scss" lang="scss">
</style>
