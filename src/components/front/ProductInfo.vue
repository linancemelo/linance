<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid mt-3 p-0">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name: 'store'}">商店</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{product.category}}</li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-lg-6 picture">
        <div class="like">
          <button class="btn btn-sm border-0" @click.prevent="addToFavorite(product)">
            <i class="bi bi-bookmarks-fill" v-if="favorId.includes(product.id)"></i>
            <i class="bi bi-bookmarks" v-else></i>
          </button>
        </div>
        <img class="img-fluid" :src="product.imageUrl" alt="" />
      </div>
      <div class="col-lg-6">
        <h1 class="mt-2 mb-4 title">{{ product.title }}</h1>        <h5 class="fs-6">
          <del class="text-secondary"
            >原價 NT${{ $filters.currency(product.origin_price) }}</del
          >
        </h5>
        <h5 class="fs-4 price">
          售價 NT$ <span class="fs-3">{{ $filters.currency(product.price) }}</span>
        </h5>
        <select
          v-if="product.category === '衣服'"
          name=""
          id=""
          class="rounded p-1 my-2"
        >
          <option value="">尺寸</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
        <div class="d-flex mt-4">
          <button
            type="button"
            class="count btn btn-light btn-md"
            @click.prevent="sub"
          >
            <i class="bi bi-dash"></i>
          </button>
          <span class="number-box mx-2 align-self-center">
            <input
              type="number"
              v-model="num"
              min="1"
              max="10"
              class="border-0 text-center"
            />
          </span>
          <button
            type="button"
            class="count btn btn-light btn-md"
            @click.prevent="add"
          >
            <i class="bi bi-plus"></i>
          </button>
          <button
            class="btn btn-lg ms-3 fs-9 bg-warning"
            :disabled="loadingItem === id"
            @click.prevent="addToCart(id)"
          >
            加入購物車
          </button>
          <button class="btn btn-lg ms-3 fs-9 toCart-btn">
            <router-link to="/user" class="text-light">前往購物車</router-link>
          </button>
        </div>
        <div class="mt-4 fs-6">
          <h5 class="fs-5">付款方式</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">
              <i class="bi bi-credit-card"></i> 信用卡付款
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">
              <i class="bi bi-bank2"></i> ATM轉帳
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios3">
              <i class="bi bi-currency-bitcoin"></i> 比特幣支付
            </label>
          </div>
        </div>
        <div class="description mt-3 col-md-10 col-lg-9">
          <h5 class="fs-5">產品描述</h5>
          <p class="text-secondary">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>

export default {
  data () {
    return {
      product: {},
      id: '',
      num: 1,
      loadingItem: {},
      isLoading: false,
      title: '',
      cartLength: 0,
      // 儲存我的最愛
      favorList: JSON.parse(localStorage.getItem('favorite')) || [],
      favorId: JSON.parse(localStorage.getItem('id')) || []
    }
  },
  inject: ['emitter'],
  methods: {
    getProductInfo () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.axios.get(api).then((res) => {
        this.product = res.data.product
      })
    },
    getCartLength () {
      const api_ = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(api_).then((res) => {
        this.cartLength = res.data.data.carts.reduce((tQty, i) => {
          return (tQty += i.qty)
        }, 0)
        this.emitter.emit('update-amount', this.cartLength)
      })
    },
    add () {
      if (this.num < 10) {
        this.num += 1
      }
    },
    sub () {
      if (this.num > 1) {
        this.num -= 1
      }
    },
    addToCart (id) {
      const cart = {
        data: {
          product_id: id,
          qty: this.num
        }
      }
      this.loadingItem = id
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.post(api, cart).then((res) => {
        this.loadingItem = {}
        this.num = 1
        this.isLoading = false
        this.title = res.data.data.product.title
        if (res.data.success) {
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功',
            content: `${this.title} 已加入購物車`
          })
        }
        this.getCartLength()
      })
    },
    addToFavorite (product) {
      // console.log(favoriteIndex) true = 0 false = -1
      const favoriteIndex = this.favorList.findIndex((item) => item.id === product.id)
      if (favoriteIndex === -1) {
        // 如果沒資料就寫入
        this.favorList.push(product)
        this.favorId.push(product.id)
        this.emitter.emit('push-message', {
          style: 'success',
          title: '成功加入',
          content: `${product.title} 已加到我的最愛`
        })
      } else {
        this.favorList.splice(favoriteIndex, 1)
        this.favorId.splice(favoriteIndex, 1)
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '成功移除',
          content: `${product.title} 已移除我的最愛`
        })
      }
      // 儲存收藏列表進去
      localStorage.setItem('favorite', JSON.stringify(this.favorList))
      localStorage.setItem('id', JSON.stringify(this.favorId))
      // 重新更新收藏列表資料
      this.favorList = JSON.parse(localStorage.getItem('favorite'))
      this.favorId = JSON.parse(localStorage.getItem('id'))
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getProductInfo()
  }
}
</script>

<style scoped src="../../assets/css/front/productinfo.scss" lang="scss"></style>
