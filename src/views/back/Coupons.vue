<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <table class="table mt-2">
      <thead>
        <tr>
          <th class="col-md-2 title">優惠券名稱</th>
          <th class="col-md-2">折數</th>
          <th class="col-md-3">優惠券代碼</th>
          <th class="col-md-2">有效日期</th>
          <th class="col-md-1 text-center">啟用</th>
          <th class="col-md-2 text-end">
            <button
              @click="openCouponModal(true)"
              class="btn btn-sm bg-transparent"
              type="button"
            >
              <i class="bi bi-plus-lg"></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="align-middle" v-for="item in coupons" :key="item.id">
          <td class="title">{{ item.title }}</td>
          <td>{{ item.percent / 10 }} 折</td>
          <td>{{ item.code }}</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td class="text-center">
            <span v-if="item.is_enabled == 1" class="text-success">有</span
            ><span v-else class="text-danger">無</span>
          </td>
          <td class="text-end">
            <button
              @click.prevent="openCouponModal(fasle, item)"
              type="button"
              class="btn btn-sm"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <button @click.prevent="openDelModal(item)" class="btn btn-sm ms-2">
              <i class="bi bi-trash-fill"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CouponModal
    ref="couponModal"
    :coupon="tempCoupon"
    @update-change-coupon="updatedChangeCoupon"
  ></CouponModal>
  <DelModal ref="delModal" :item="tempCoupon" @del-item="delCoupon"></DelModal>
</template>

<script>
import CouponModal from '@/components/back/CouponModal.vue'
import DelModal from '@/components/back/DelModal.vue'

export default {
  components: { CouponModal, DelModal },
  data () {
    return {
      coupons: [],
      pagination: {},
      tempCoupon: {},
      isAdd: false,
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getCoupons () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.axios.get(api).then((res) => {
        if (res.data.success) {
          this.coupons = res.data.coupons
          this.pagination = res.data.pagination
        }
        this.isLoading = false
      })
    },
    openCouponModal (isAdd, item) {
      if (isAdd) {
        this.tempCoupon = {}
      } else {
        this.tempCoupon = { ...item }
        // this.tempCoupon.due_date = new Date(this.tempCoupon.due_date * 1000).toLocaleString()
      }
      this.isAdd = isAdd
      const couponModal = this.$refs.couponModal
      couponModal.showModal()
    },
    updatedChangeCoupon (item) {
      this.tempCoupon = item
      const unixDate = Math.floor(new Date(item.due_date).getTime() / 1000)
      item.due_date = unixDate
      const couponModal = this.$refs.couponModal
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isAdd) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      couponModal.hideModal()
      this.axios[httpMethod](api, { data: this.tempCoupon }).then((res) => {
        if (res.data.success) {
          this.getCoupons()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功'
          })
        } else {
          if (item.id) {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、')
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: '有未填欄位，請重新新增！'
            })
          }
        }
      })
    },
    openDelModal (item) {
      this.tempCoupon = { ...item }
      const DelModal = this.$refs.delModal
      DelModal.showModal()
    },
    delCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.axios.delete(api).then((res) => {
        const DelModal = this.$refs.delModal
        DelModal.hideModal()
        this.getCoupons()
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .title {
    display: none;
  }
}
</style>
