<template>
  <Loading :active="isLoading"></Loading>
  <div class="other container-fluid mb-5 px-0">
    <h2>您可能還會喜歡...</h2>
    <ul class="d-flex justify-content-around p-0 mt-4">
      <li v-for="item in otherList" :key="item.id" class="px-2">
        <div @click.prevent="toInfo(item.id)">
          <div class="img-container">
            <div class="cover">
            </div>
            <img :src="item.imageUrl" class="img-fluid" alt=""/>
          </div>
          <h5 class="mt-2">{{ item.title }}</h5>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      otherList: [],
      isLoading: false
    }
  },
  computed: {
    // getRandomList () {
    //   const tempList = [...this.products] // 複製一份總列表
    //   const randomList = [] // 創建一個要接收的列表
    //   for (let i = 0; i < 3; i++) { // 循環三次
    //     const length = tempList.length // 總列表的長度
    //     // const index = Math.floor(Math.random() * length)
    //     // const goods = tempList.splice(index, 1)
    //     // randomList.push(goods)
    //   }
    //   return randomList
    // }
  },
  methods: {
    getProductList () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.axios.get(api).then((res) => {
        this.products = res.data.products
        this.getRandom()
      })
    },
    getRandom () {
      const tempList = [...this.products] // 複製一份總列表
      const randomList = [] // 創建一個要接收的列表
      for (let i = 0; i < 3; i++) { // 循環三次
        const length = tempList.length // 總列表的長度
        const index = Math.floor(Math.random() * length)
        const goods = tempList.splice(index, 1)[0]
        randomList.push(goods)
      }
      this.otherList = randomList
    },
    toInfo (id) {
      this.isLoading = true
      this.$router.push(`/product/${id}`)
      setTimeout(() => {
        window.location.reload()
      }, 200)
    }
  },
  created () {
    this.getProductList()
  }
}
</script>

<style scoped lang="scss" src="@/assets/css/front/otherProduct.scss">

</style>
