<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <router-link class="col-3 fs-5" to="/"
        >𝐿𝒾𝓃𝒶𝓃𝒸𝑒</router-link>
    <button
      class="btn navbar-toggler fo-50"
      style="
        font-size: 0.7rem;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 0.3rem 0.6rem;
        font-size: 1rem;
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      選單
    </button>
    <div
      class="collapse navbar-collapse col-3"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            首頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/store" class="nav-link">
            所有產品
          </router-link>
        </li>
        <li class="nav-item" @click.prevent="showFavorite">
          <a class="nav-link" href="">
            <i class="bi bi-suit-heart"></i>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/user" class="nav-link">
            <i class="bi bi-cart"></i>
          </router-link>
          <span class="cart-amount">{{ cartAmount }}</span>
        </li>
      </ul>
    </div>
  </nav>
  <div>
    <div class="favorite" ref="favorite">
      <div class="top d-flex justify-content-between text-light px-2">
        <h2 class="m-0">我的最愛</h2>
        <span class="align-self-center" @click.prevent="closeFavorite"><i class="bi bi-x-lg" style="cursor: pointer"></i></span>
      </div>
      <div class="favorite-list text-light">
        <ul class="favorite-product" v-if="favorList.length>0">
          <li v-for="item in favorList" :key="item.id"
          class="favorite-item d-flex justify-content-between">
            <div class="image">
              <img :src="item.imageUrl" class="img-fluid" alt="">
            </div>
            <div class="descript d-flex flex-column justify-content-center">
              <div class="title mb-1 fs-4">{{item.title}}</div>
              <div class="price mt-1">NTD$ {{ $filters.currency(item.price) }}</div>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <div class="more mb-1" @click.prevent="toInfo(item.id)">詳細</div>
              <div class="del mt-1" @click.prevent="delFavorite(item)">移除</div>
            </div>
          </li>
        </ul>
        <h4 class="text-center pt-5" v-else>目前尚無我的最愛！</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartAmount: 0,
      favorList: JSON.parse(localStorage.getItem('favorite')) || [],
      favorId: JSON.parse(localStorage.getItem('id')) || []
    }
  },

  methods: {
    getCartAmount () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(api).then((res) => {
        this.cartAmount = res.data.data.carts.reduce((tQty, i) => {
          return (tQty += i.qty)
        }, 0)
      })
    },
    showFavorite () {
      this.$refs.favorite.style.right = '0'
    },
    closeFavorite () {
      this.$refs.favorite.style.right = '-70%'
    },
    toInfo (id) {
      this.$router.push(`/product/${id}`)
    },
    delFavorite (product) {
      const favoriteIndex = this.favorList.findIndex((item) => item.id === product.id)
      this.favorList.splice(favoriteIndex, 1)
      this.favorId.splice(favoriteIndex, 1)
      // 儲存收藏列表進去
      localStorage.setItem('favorite', JSON.stringify(this.favorList))
      localStorage.setItem('id', JSON.stringify(this.favorId))
      // 重新更新收藏列表資料
      this.favorList = JSON.parse(localStorage.getItem('favorite'))
      this.favorId = JSON.parse(localStorage.getItem('id'))
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('update-amount', (amount) => {
      this.cartAmount = amount
    })
  },
  created () {
    this.getCartAmount()
  }
}
</script>

<style scope src="../../assets/css/front/navbar.scss" lang="scss"></style>
