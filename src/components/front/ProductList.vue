<template>
  <Loading :active="isLoading"></Loading>
  <div class="mt-4">
    <ul class="list-group list-group-horizontal w-100 my-2 px-1 text-center">
      <button
        v-for="(category, index) in category"
        :key="index"
        type="button"
        class="category list-group-item list-group-item-action border-0 mx-1 p-1"
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
          <div>
            <button class="btn btn-sm border-0" @click.prevent="addToFavorite(item)">
              <i class="bi bi-suit-heart"></i>
            </button>
            <button class="btn btn-sm border-0"
              ><i class="bi bi-arrow-right"></i
            ></button>
          </div>
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
import Pagination from '@/components/common/Paginations.vue'
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
      currentPageData: [],
      favorList: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  watch: {
    'pagination.current_page': function () {
      window.scrollTo({
        top: this.height,
        left: 0,
        behavior: 'smooth'
      })
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
      setTimeout(() => {
        this.currentPageData = this.selectedProducts.slice(start, end)
      }, 300)
    },
    toInfo (id) {
      this.$router.push(`/product/${id}`)
    },
    addToFavorite (product) {
      // console.log(favoriteIndex) true = 0 false = -1
      const favoriteIndex = this.favorList.findIndex((item) => item.id === product.id)
      if (favoriteIndex === -1) {
        // 如果沒資料就寫入
        this.favorList.push(product)
        // console.log('已成功加入收藏列表')
      } else {
        this.favorList.splice(favoriteIndex, 1)
        // console.log('商品已從收藏列表移除')
      }
      // 儲存收藏列表進去
      localStorage.setItem('favorite', JSON.stringify(this.favorList))
      // 重新更新收藏列表資料
      this.favorList = JSON.parse(localStorage.getItem('favorite'))
    }
  },
  created () {
    this.getProductList()
  }
}
</script>

<style scoped src="../../assets/css/front/productlist.css"></style>
