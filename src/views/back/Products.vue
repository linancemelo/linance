<template>
  <Loading :active="isLoading"></Loading>
  <div class="container-fluid">
    <table class="table mt-2 fs-6">
      <thead>
        <tr>
          <th class="category col-md-2">種類</th>
          <th class="col-md-5">產品名稱</th>
          <th class="col-md-1">原價</th>
          <th class="col-md-1">售價</th>
          <th class="col-md-1 text-center">庫存</th>
          <th class="col-md-2 text-end">
            <button
              @click="openModal(true)"
              type="button"
              class="btn btn-sm bg-transparent"
            >
              <i class="bi bi-plus-lg"></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id" class="align-middle">
          <td class="category">{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
          <td class="text-right">{{ $filters.currency(item.price) }}</td>
          <td class="text-center">
            <span v-if="item.is_enabled == 1" class="text-success">有</span
            ><span v-else class="text-danger">無</span>
          </td>
          <td class="text-end">
            <button @click="openModal(false, item)" class="btn btn-sm">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button @click="openDelModal(item)" class="btn btn-sm ms-2">
              <i class="bi bi-trash-fill"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 分頁 -->
  <Pagination :pages="pagination" @update-page="getProduct"></Pagination>
  <!--彈跳視窗  -->
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-change="updatedChange"
  ></ProductModal>
  <DelModal
    ref="delModal"
    :item="tempProduct"
    @del-item="delProduct"
  ></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import DelModal from '@/components/DelModal.vue'
import Pagination from '@/components/Paginations.vue'

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isAdd: false,
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct (page = 3) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.axios.get(api).then((res) => {
        if (res.data.success) {
          this.isLoading = false
          this.products = res.data.products
          this.pagination = res.data.pagination
        }
      })
    },
    openModal (isAdd, item) {
      if (isAdd) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isAdd = isAdd
      const ProductModal = this.$refs.productModal
      ProductModal.showModal()
    },
    updatedChange (item) {
      this.tempProduct = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      const ProductModal = this.$refs.productModal
      // 如果不是新增（就是編輯）
      if (!this.isAdd) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      this.axios[httpMethod](api, { data: this.tempProduct }).then((res) => {
        // console.log(res, httpMethod);
        ProductModal.hideModal()
        if (res.data.success) {
          this.getProduct()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功'
          })
        } else {
          // 由於如果是點新增產品直接空欄位更新 會有id不存在問題 導致message是id不存在 而無法使用join
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
      this.tempProduct = { ...item }
      const DelModal = this.$refs.delModal
      DelModal.showModal()
    },
    delProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.axios.delete(api).then((res) => {
        const DelModal = this.$refs.delModal
        DelModal.hideModal()
        this.getProduct()
      })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style scoped src="../../assets/css/back/products.css"></style>
