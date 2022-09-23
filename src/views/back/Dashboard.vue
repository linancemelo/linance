<template>
  <div>
    <!-- 頭部導航欄 -->
    <nav class="navbar navbar-expand-lg d-flex justify-content-between">
      <h4
        class="fs-6 ms-4 mb-0 text-light"
      >
        後台管理系統
      </h4>
      <!-- logout -->
      <div class="col-lg-2 col-6 text-end">
        <button @click.prevent="logOut" class="btn btn-light">登出</button>
      </div>
    </nav>

    <!-- 主要模塊 -->
    <div class="container-fluid">
      <div class="row mt-0">
        <!-- 側邊欄 -->
        <div class="sidebar col-md-2 vh-100 pt-4">
          <ul class="nav nav-pills flex-column mb-auto h-100">
            <li
              class="mb-4 nav-item mx-auto"
            >
              <router-link
                to="/dashboard/products"
                class="nav-link text-dark"
                @click.prevent=""
                ><i class="bi bi-car-front me-2"></i>產品列表</router-link
              >
            </li>
            <li class="mb-4 nav-item mx-auto">
              <router-link to="/dashboard/orders" class="nav-link text-dark"
                ><i class="bi bi-bag me-2"></i>歷史訂單</router-link
              >
            </li>
            <li class="mb-4 nav-item mx-auto">
              <router-link to="/dashboard/coupons" class="nav-link text-dark"
                ><i class="bi bi-bookmarks me-2"></i>優惠券</router-link
              >
            </li>
          </ul>
        </div>
        <!-- Router for product list...etc-->
        <div class="router col-md-10 col-12">
          <ToastArea></ToastArea>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastArea from '@/components/common/ToastArea.vue'

export default {
  components: {
    ToastArea
  },
  created () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)meloToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.axios.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
  },
  methods: {
    logOut () {
      const api = `${process.env.VUE_APP_API}logout`
      this.axios.post(api, this.user).then((res) => {
        this.$router.push('/login')
      })
    }
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style scoped src="../../assets/css/back/dashboard.scss" lang="scss"></style>
