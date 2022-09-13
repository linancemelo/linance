<template>
  <Loading :active="isLoading"></Loading>
  <div class="mt-4">
    <ul class="list-group list-group-horizontal w-100 my-2 text-center">
      <button
        v-for="(category, index) in category"
        :key="index"
        type="button"
        class="list-group-item list-group-item-action border-0 mx-1 p-1"
        @click.prevent="getProductList(1, category)"
        >
        {{ category }}
      </button>
    </ul>
    <div class="product row px-3">
      <div
        class="col-lg-4 col-6 my-4 px-3"
        v-for="item in currentPageData"
        :key="item.id"
      >
        <a href=""
          ><img
            :src="
              item.imageUrl ||
              'https://lh3.googleusercontent.com/j6SkQphnr-A9l3EEClegtdA9ao56OAipb3eTbKA9Sgo_cimXj48lXeT1ZkbxAsXPDFpJpNWDkz5HATOdGlHG4H6MaPI0G1v_INrArw=w1400-k'
            "
            class="card-img-top img-fluid"
            :title="item.title"
            @click.prevent="toInfo(item.id)"
        /></a>
        <div class="d-flex justify-content-between">
          <h5 class="card-title mt-1">{{ item.title }}</h5>
          <a href="#" class="card-link text-dark"
            ><i class="bi bi-arrow-right"></i
          ></a>
        </div>
        <span class="card-link"
          >NTD <span>{{ $filters.currency(item.price) }}</span>
        </span>
      </div>
    </div>
  </div>
  <Pagination :pages="pagination" @update-page="getProductList"></Pagination>
</template>
<script>
import Pagination from '@/components/Paginations.vue'
export default {
  components: {
    Pagination
  },
  props: ['height'],
  data () {
    return {
      products: [],
      id: '',
      isLoading: false,
      category: ['全部', '汽車', '周邊', '衣服', '生活'],
      current_category: 0,
      // 設定分類篩選
      selectedCategory: '全部',
      selectedProducts: [],
      // 設定分頁
      pagination: {
        total_pages: 1,
        current_page: 1,
        pageSize: 12
      },
      currentPageData: []
    }
  },
  methods: {
    getProductList (page = 1, category = '全部') {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(api).then((res) => {
        this.products = res.data.products
        this.id = res.data.id
        this.isLoading = false
        this.selectedProducts = [...this.products]
        // 設定分類篩選
        this.filterProduct(category)
        this.createPagination(page)
      })
    },
    filterProduct (category) {
      this.selectedCategory = category
      if (this.selectedCategory === '全部') {
        this.selectedProducts = this.products
      } else {
        this.selectedProducts = this.products.filter(
          (item) => item.category === this.selectedCategory
        )
      }
    },
    // 設定分頁
    createPagination (page) {
      this.pagination.current_page = page
      this.pagination.total_pages = Math.ceil(
        this.selectedProducts.length / this.pagination.pageSize
      )
      this.pagination.total_pages =
        this.pagination.total_pages === 0 ? 1 : this.pagination.total_pages
      const start = (this.pagination.current_page - 1) * this.pagination.pageSize
      const end = this.pagination.current_page * this.pagination.pageSize
      window.scrollTo({
        top: this.height,
        left: 0,
        behavior: 'smooth'
      })
      setTimeout(() => {
        this.currentPageData = this.selectedProducts.slice(start, end)
      }, 300)
      console.log(this.pagination)
    },
    toInfo (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    this.getProductList()
  }
}
</script>

<style scoped src="../../assets/css/front/productlist.css"></style>
