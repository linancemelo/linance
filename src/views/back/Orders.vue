<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <table class="table mt-2">
      <thead>
        <tr>
          <th class="order-date col-md-2">下單日</th>
          <th class="col-md-1 col-2">姓名</th>
          <th class="tel col-md-3">電話</th>
          <th class="col-md-2 col-2">總金額</th>
          <th class="col-md-1 col-2">付款情況</th>
          <th class="col-md-1 text-center col-2">詳細</th>
          <th class="col-md-1 text-end col-2">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="align-middle">
          <td class="order-date">{{ $filters.date(order.create_at) }}</td>
          <td><span v-text="order.user.name" v-if="order.user"></span></td>
          <td class="tel">
            <span v-text="order.user.tel" v-if="order.user"></span>
          </td>
          <td>
            {{ $filters.currency(order.total) }}
          </td>
          <td class="text-center">
            <span v-if="order.is_paid" class="text-success">已付</span>
            <span v-else class="text-danger">未付</span>
          </td>
          <td class="text-center">
            <button class="btn btn-sm btn-warning">
              <span class="fo-50">more</span>
            </button>
          </td>
          <td class="text-end">
            <button
              @click.prevent="openDelModal(order)"
              class="btn btn-sm ms-2"
            >
              <i class="bi bi-trash-fill"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <DelModal ref="delModal" :item="tempOrder" @del-item="delOrder"></DelModal>
</template>

<script>
import DelModal from '@/components/back/DelModal.vue'

export default {
  components: {
    DelModal
  },
  data () {
    return {
      orders: [],
      isLoading: false,
      tempOrder: {}
    }
  },
  inject: ['emitter'],
  methods: {
    getOrders () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders`
      this.axios.get(api).then((res) => {
        this.orders = res.data.orders
        this.orders.shift()
        this.isLoading = false
      })
    },
    openDelModal (order) {
      this.tempOrder = { ...order }
      const DelModal = this.$refs.delModal
      DelModal.showModal()
    },
    delOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.axios.delete(api).then((res) => {
        const DelModal = this.$refs.delModal
        DelModal.hideModal()
        this.getOrders()
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .order-date,
  .tel {
    display: none;
  }
}
</style>
