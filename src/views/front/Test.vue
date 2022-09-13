<template>
  <Paginations :pages="pagination"></Paginations>
</template>

<script>
import Paginations from '@/components/Paginations.vue'
export default {
  components: { Paginations },
  data () {
    return {
      pagination: {}
    }
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=1`
      this.axios.get(api).then((res) => {
        console.log(res)
      })
      // this.axios.get(api).then((res) => {
      //   if (res.data.success) {
      //     this.pagination = res.data.pagination
      //     console.log(res)
      //   }
      // })
    }
  },
  created () {
    this.getProduct()
  }
}
</script>

<style>

</style>
