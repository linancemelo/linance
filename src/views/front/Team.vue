<template>
  <div class="col-md-10 px-5 d-flex flex-wrap">
    <div class="row">
      <div class="card col-6 col-md-3" v-for="user in userList" :key="user.id">
      <img :src="user.avatar" class="card-img-top img-fluid" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">{{ user.employment.title }}</h5>
        <p class="card-text">{{ user.username }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userList: []
    }
  },
  methods: {
    getTeammate () {
      const api = 'https://random-data-api.com/api/users/random_user?size=8'
      this.axios.get(api).then((res) => {
        this.userList = res.data
        console.log(this.userList)
      })
    }
  },
  created () {
    this.getTeammate()
  }
}
</script>

<style scoped src="../../assets/css/front/team.css">

</style>
