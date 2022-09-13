<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <!-- 主要模塊 -->
    <div class="cart row">
      <div class="col-lg-7 mb-3">
        <h5 class="text-start">購物車內容</h5>
        <ul class="list-group list-group-flush shadow">
          <li
            v-for="item in cart"
            :key="item.id"
            class="d-flex justify-content-between list-group-item fs-7"
          >
            <div class="col-2 align-self-center">
              <img
                  class="img-fluid"
                  :src="item.product.imageUrl"
                  alt=""
                />

            </div>
            <div class="col-10 d-flex">
              <div class="col-12 col-sm-6 align-self-center">
                <router-link
                    :to="`/product/${item.product_id}`"
                    class="ps-2 toinfo d-flex text-dark"
                  >
                      {{ item.product.title }}
                </router-link>
              </div>
              <div class="col-12 col-sm-6 d-flex align-self-center justify-content-end">
                <div class="align-self-center me-2">
                  ${{ $filters.currency(item.final_total) }}
                </div>
                <div class="d-flex align-items-center">
                  <button
                    @click.prevent="sub(item)"
                    type="button"
                    class="count btn btn-sm"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    v-model="item.qty"
                    class="border-0 text-center mx-2"
                    @change="updateCartList(item)"
                  />
                  <button
                    @click.prevent="add(item)"
                    type="button"
                    class="count btn btn-sm"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                  <button
                    @click.prevent="remove(item)"
                    class="count btn btn-sm ms-1"
                  >
                    <i class="bi bi-x align-self-center"></i>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-lg-5">
        <h5 class="text-start">訂單摘要</h5>
        <div class="card shadow">
          <ul class="list-group list-group-flush">
            <li class="d-flex justify-content-between mb-2">
              <span>總數量</span
              ><span
                ><span>{{ total_qty }}</span
                >件</span
              >
            </li>
            <li class="d-flex justify-content-between mb-2">
              <span>小計</span
              ><span>
                $<span>{{ $filters.currency(total_price) }}</span>
              </span>
            </li>
            <li class="d-flex justify-content-between align-items-center mb-2">
              <span class="d-flex align-items-center mt-1">
                <input
                  class="w-50 ps-1"
                  type="text"
                  placeholder="優惠券代碼"
                  v-model="coupon_code"
                />
                <a
                  @click.prevent="addCoupon"
                  href=""
                  class="btn btn-sm use"
                  >使用</a
                >
              </span>
              <span class="text-danger" v-if="discount<0">
                $<span>-{{ $filters.currency(Math.abs(discount)) }}</span>
              </span>
            </li>
            <li class="d-flex justify-content-between mb-2">
              <span>運費</span>
              <span>$60</span>
            </li>
            <hr>
            <li class="d-flex justify-content-between mb-2">
              <span>總金額</span
              ><span>
                $<span>{{ $filters.currency(final_total_price+60) }}</span>
              </span>
            </li>
            <li class="d-flex justify-content-center mt-3">
              <button
                @click.prevent="openUserInfo"
                class="btn px-5 rounded-pill text-white"
                style="background-color: #415ae9"
              >
                填寫用戶資料
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: [],
      total_price: 0,
      final_total_price: 0,
      total_qty: 0,
      coupon_code: '',
      discount: 0,
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getCartList () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.axios.get(api).then((res) => {
        this.cart = res.data.data.carts
        // console.log(res.data);
        this.total_price = res.data.data.total
        this.final_total_price = Math.round(res.data.data.final_total)
        this.total_qty = this.cart.reduce((tQty, i) => {
          return (tQty += i.qty)
        }, 0)
        this.discount = Math.round(this.final_total_price - this.total_price)
        // console.log(this.total_qty);
        this.isLoading = false
        this.emitter.emit('update-amount', this.total_qty)
      })
    },
    updateCartList (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.axios.put(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.getCartList()
        }
      })
    },
    add (item) {
      item.qty += 1
      this.updateCartList(item)
    },
    sub (item) {
      if (item.qty > 1) {
        item.qty -= 1
        this.updateCartList(item)
      }
    },
    remove (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.axios.delete(api).then(() => {
        this.getCartList()
      })
    },
    addCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.axios.post(api, { data: coupon }).then((res) => {
        this.getCartList()
      })
    },
    openUserInfo () {
      this.$router.push('/user/userinfo')
    }
  },
  created () {
    this.getCartList()
  }
}
</script>

<style scoped src="../../assets/css/front/cart.css"></style>
