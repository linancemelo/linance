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
</template>

<script>
export default {
  data () {
    return {
      cartAmount: 0
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

<style scope src="../../assets/css/front/navbar.css"></style>
