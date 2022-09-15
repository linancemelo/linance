<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
// export default {
//   data () {
//     return {
//       isFavorite: false,
//       products: [],
//       id: '',
//       favorList: JSON.parse(localStorage.getItem('favorite')) || []
//     }
//   },
//   methods: {
//     addToFavorite (product) {
//       // console.log(favoriteIndex) true = 0 false = -1
//       const favoriteIndex = this.favorList.findIndex((item) => item.id === product.id)
//       if (favoriteIndex === -1) {
//         // 如果沒資料就寫入
//         this.favorList.push(product)
//         console.log('已成功加入收藏列表')
//       } else {
//         console.log('該商品已在購物車')
//       }
//       // 儲存收藏列表進去
//       localStorage.setItem('favorite', JSON.stringify(this.favorList))
//       // 重新更新收藏列表資料
//       this.favorList = JSON.parse(localStorage.getItem('favorite'))
//     },

//     getProductList () {
//       const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
//       this.axios.get(api).then((res) => {
//         this.products = res.data.products.slice(0, 3)
//         this.id = res.data.id
//       })
//     }
//   },
//   created () {
//     this.getProductList()
//     // console.log(JSON.parse(localStorage.getItem('favorite')))
//   }
// }
export default {

}
</script>

<style>
/* .active.bi-suit-heart::before{
  content: '\f59d';
  color: red
} */
</style>
