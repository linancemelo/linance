<template>
  <Loading :active="isLoading"></Loading>
  <Navbar></Navbar>
  <div class="container-fluid">
    <div class="cart row">
      <div class="col-lg-7">
        <h5 class="text-start">購物車內容</h5>
        <ul class="list-group list-group-flush shadow">
          <li
            v-for="item in cart"
            :key="item.id"
            class="d-flex row list-group-item"
          >
            <div class="col-12 col-sm-6">
              <router-link
                :to="`/product/${item.product_id}`"
                class="toinfo d-flex text-dark"
                style="text-decoration: none"
              >
                <img
                  class="img-fluid align-self-center"
                  :src="item.product.imageUrl"
                  alt=""
                />
                <p class="align-self-center ms-3 mb-0">
                  {{ item.product.title }}
                </p>
              </router-link>
            </div>
            <div
              class="col-12 col-sm-6 text-end d-flex justify-content-end align-self-center"
            >
              <div class="align-self-center me-2">
                ${{ $filters.currency(item.final_total) }}
              </div>
              <div>
                <button
                  @click.prevent="sub(item)"
                  type="button"
                  class="count btn btn-light btn-sm"
                >
                  <!-- :disabled="loadingItem === id" -->
                  <i class="bi bi-dash"></i>
                </button>
                <span>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    v-model="item.qty"
                    class="border-0 text-center mx-2"
                    @change="updateCartList(item)"
                  />
                </span>
                <button
                  @click.prevent="add(item)"
                  type="button"
                  class="count btn btn-light btn-sm"
                >
                  <i class="bi bi-plus"></i>
                </button>
                <button
                  @click.prevent="remove(item)"
                  class="btn btn-sm rounded-pill ms-1"
                >
                  <i class="bi bi-x align-self-center"></i>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-lg-5">
        <div class="card shadow">
          <h5 class="text-start mb-3">訂單摘要</h5>
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
            <li class="d-flex justify-content-between border-bottom pb-2 mb-2">
              <span>
                <input
                  class="w-50 ps-1"
                  type="text"
                  placeholder="請輸入折扣代碼"
                  v-model="coupon_code"
                />
                <a
                  @click.prevent="addCoupon"
                  href=""
                  class="ms-1 text-danger text-decoration-none"
                  >使用優惠券</a
                >
              </span>
              <span class="text-success">
                $<span>-{{ $filters.currency(Math.abs(discount)) }}</span>
              </span>
            </li>
            <li class="d-flex justify-content-between mb-2">
              <span>總金額</span
              ><span>
                $<span>{{ $filters.currency(final_total_price) }}</span>
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
  <Footer></Footer>
  <router-view></router-view>
  <CartIcon :qty="total_qty"></CartIcon>
</template>

<script>
import CartIcon from "@/views/front/CartIcon.vue";
import Navbar from "./Navbar.vue";
import Footer from "@/views/front/Footer.vue";

export default {
  components: {
    CartIcon,
    Navbar,
    Footer,
  },
  data() {
    return {
      cart: [],
      total_price: 0,
      final_total_price: 0,
      total_qty: 0,
      coupon_code: "",
      discount: 0,
      isLoading: false,
    };
  },
  methods: {
    getCartList() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.axios.get(api).then((res) => {
        this.cart = res.data.data.carts;
        // console.log(res.data);
        this.total_price = res.data.data.total;
        this.final_total_price = Math.round(res.data.data.final_total);
        this.total_qty = this.cart.reduce((tQty, i) => {
          return (tQty += i.qty);
        }, 0);
        this.discount = Math.round(this.final_total_price - this.total_price);
        // console.log(this.total_qty);
        this.isLoading = false;
      });
    },
    updateCartList(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.axios.put(api, { data: cart }).then((res) => {
        if (res.data.success) {
          this.getCartList();
        } else {
          console.log("更新失敗");
        }
      });
    },
    add(item) {
      item.qty += 1;
      this.updateCartList(item);
    },
    sub(item) {
      if (item.qty > 1) {
        item.qty -= 1;
        this.updateCartList(item);
      }
    },
    remove(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.axios.delete(api).then(() => {
        this.getCartList();
      });
    },
    addCoupon() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.axios.post(api, { data: coupon }).then((res) => {
        this.getCartList();
      });
    },
    openUserInfo() {
      this.$router.push("/cart/userinfo");
    },
  },
  created() {
    this.getCartList();
  },
};
</script>

<style scoped src="../../assets/css/front/cart.css"></style>
