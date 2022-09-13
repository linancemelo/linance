<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 py-2 text-center">
        <img
          src="https://i.pinimg.com/736x/ac/bc/7d/acbc7d7a6d49d6b8fc745491a2150da6.jpg"
          alt=""
          class="img-fluid h-100"
        />
      </div>
      <div class="col-lg-6 py-2 d-flex flex-column justify-content-center">
        <h3 class="mb-4 text-center">登入後台</h3>
        <form @submit.prevent="signIn" class="mx-auto">
          <div class="mb-3">
            <label for="inputEmail" class="">帳號</label>
            <input
              type="email"
              id="inputEmail"
              class="form-control rounded-pill"
              placeholder="Email address"
              required
              v-model="user.username"
            />
          </div>
          <div class="mb-4">
            <label for="inputPassword" class="">密碼</label>
            <input
              type="password"
              id="inputPassword"
              class="form-control rounded-pill"
              placeholder="Password"
              required
              v-model="user.password"
            />
          </div>
          <div class="text-center">
            <button class="btn btn-dark btn-md" type="submit">登入</button>
          </div>
        </form>
        <div class="text-center my-2">
          <span class="dash"></span>
          <span class="text-secondary">或</span>
          <span class="dash"></span>
        </div>
        <div class="text-center">
          <a class="link-secondary">忘記密碼？</a>
        </div>
      </div>
    </div>
    <!--
    <div class="col-md-6 border">
      <h1 class="">登入</h1>
      <form @submit.prevent="signIn" class="">
        <div class="">
          <label for="inputEmail" class="">帳號</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control rounded-pill"
            placeholder="Email address"
            required
            v-model="user.username"
          />
        </div>
        <div class="">
          <label for="inputPassword" class="">密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control rounded-pill"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>
        <div class="">
          <button class="btn btn-dark btn-md" type="submit">登入</button>
        </div>
      </form>
      <div class="">
        <span class="dash"></span>
        <span class="text-secondary">或</span>
        <span class="dash"></span>
      </div>
      <div class="">
        <a class="link-secondary">忘記密碼？</a>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.axios.post(api, this.user).then((res) => {
        const { token, expired } = res.data
        document.cookie = `meloToken=${token}; expires=${new Date(expired)}`
        this.$router.push('/dashboard/products')
      })
    }
  }
}
</script>

<style scoped src="../../assets/css/back/login.css"></style>
