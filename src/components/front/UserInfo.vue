<template>
  <Loading :active="isLoading"></Loading>
  <div class="form row justify-content-center">
    <Form class="col-sm-12" v-slot="{ errors }" @submit="createOrder">
      <div class="mb-2">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="form.user.email"
        ></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-2">
        <label for="name" class="form-label">姓名</label>
        <Field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          placeholder="請輸入姓名"
          rules="required"
          v-model="form.user.name"
        ></Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-2">
        <label for="tel" class="form-label">電話</label>
        <Field
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話"
          rules="required"
          v-model="form.user.tel"
        ></Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-2">
        <label for="address" class="form-label">地址</label>
        <Field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址"
          rules="required"
          v-model="form.user.address"
        ></Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-2">
        <label for="message" class="form-label">留言</label>
        <textarea
          name=""
          id="message"
          class="form-control"
          cols="5"
          rows="5"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="d-flex justify-content-between">
        <button @click.prevent="backToCart" class="btn px-3 mt-3">&lt; 回購物車</button>
        <button class="btn px-3 mt-3">送出訂單 &gt;</button>
      </div>
    </Form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      isLoading: false
    }
  },
  methods: {
    createOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.axios.post(api, { data: order }).then((res) => {
        const orderId = res.data.orderId
        this.$router.push(`order/${orderId}`)
      })
    },
    backToCart () {
      this.$router.push('/user')
    }
  },
  created () {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 300)
  }
}
</script>

<style scoped src="../../assets/css/front/userinfo.scss" lang="scss"></style>
