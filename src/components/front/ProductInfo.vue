<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-lg-6 picture">
        <img class="img-fluid" :src="product.imageUrl" alt="" />
      </div>
      <div class="col-lg-6">
        <!---->
        <p class="text-secondary" style="margin: 0">{{ product.category }}</p>
        <!---->
        <h1 class="mt-2 mb-4 title">{{ product.title }}</h1>
        <!---->
        <h5 class="fs-6">
          <del class="text-secondary"
            >原價 NT${{ $filters.currency(product.origin_price) }}</del
          >
        </h5>
        <h5 class="fs-5 price">
          售價 NT$ <span>{{ $filters.currency(product.price) }}</span>
        </h5>
        <!--v-if category='服飾'-->
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
        <!---->
        <div class="d-flex mt-1">
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
            class="btn btn-sm ms-3 fs-9 add-btn"
            :disabled="loadingItem === id"
            @click.prevent="addToCart(id)"
          >
            加入購物車
          </button>
          <router-link to="/user" class="btn btn-sm ms-3 fs-9 toCart-btn">前往購物車</router-link>
        </div>
        <!---->
        <div class="mt-4 fs-6">
          <h5 class="fs-6">付款方式</h5>
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
        <!---->
        <div class="mt-3 col-md-10 col-lg-9">
          <h5 class="fs-6">產品描述</h5>
          <p>
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
      cartLength: 0
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
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getProductInfo()
  }
}
</script>

<style scoped src="../../assets/css/front/productinfo.scss" lang="scss"></style>
