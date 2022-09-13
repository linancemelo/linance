<template>
  <!-- http://192.168.0.48:8084/#/order/-N9CJHr7rRDDo2ryozIy -->
  <Loading :active="isLoading"></Loading>
  <div class="py-3 row justify-content-center bg-light">
    <form class="col-lg-6">
      <table class="table align-middle">
        <thead>
          <th class="ps-2">品名</th>
          <th class="ps-1">數量</th>
          <th class="text-end pe-2">小計</th>
        </thead>
        <tbody>
          <tr v-for="item in order.products" :key="item.id">
            <td>{{ item.product.title }}</td>
            <td>{{ item.qty }}{{ item.product.unit }}</td>
            <td class="text-end">
              $ {{ $filters.currency(item.final_total) }}
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-danger">總計</td>
            <td class="text-end fw-bold">
              $ {{ $filters.currency(order.total) }}
            </td>
          </tr>
        </tfoot>
      </table>

      <table class="table">
        <tbody>
          <tr>
            <th width="120">Email</th>
            <td>{{ order.user.email }}</td>
          </tr>
          <tr>
            <th>姓名</th>
            <td>{{ order.user.name }}</td>
          </tr>
          <tr>
            <th>收件人電話</th>
            <td>{{ order.user.tel }}</td>
          </tr>
          <tr>
            <th>收件人地址</th>
            <td>{{ order.user.address }}</td>
          </tr>
          <tr>
            <th>付款狀態</th>
            <td>
              <span v-if="!order.is_paid">尚未付款</span>
              <span v-else class="text-success">付款完成</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="text-end">
        <router-link
          to="/"
          v-if="order.is_paid"
          class="btn btn-dark px-3 rounded-pill"
        >
          &lt; 回首頁
        </router-link>
        <button
          @click.prevent="payOrder"
          class="btn btn-danger px-3 ms-1 rounded-pill"
          v-if="order.is_paid === false"
        >
          確認付款
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.axios.get(api).then((res) => {
        this.order = res.data.order
        this.isLoading = false
        // console.log(this.order);
      })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.axios.post(api).then((res) => {
        this.getOrder()
      })
    }
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder()
  }
}
</script>

<style></style>
