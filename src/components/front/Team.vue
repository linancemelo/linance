<template>
  <div class="col-md-10 px-5 d-flex flex-wrap">
    <div class="row">
      <div class="card col-6 col-md-3 border-0" v-for="user in userList" :key="user.id">
      <img :src="user.image" class="card-img-top img-fluid" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">{{ user.title }}</h5>
        <p class="card-text">{{ user.name }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userList: [
        {
          name: 'Lebron James',
          title: '執行長',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png'
        },
        {
          name: 'Carmelo Anthony',
          title: '企劃總監',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2546.png'
        },
        {
          name: 'Dwyane Wade',
          title: '品牌總監',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2548.png'
        },
        {
          name: 'Chris Paul',
          title: '汽車總監',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/101108.png'
        },
        {
          name: 'Kobe Bryant',
          title: '服飾總監',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/977.png'
        },
        {
          name: 'Anthony Davis',
          title: '行銷公關',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203076.png'
        },
        {
          name: 'Kevin Durant',
          title: '前端工程師',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png'
        },
        {
          name: 'Stephen Curry',
          title: '後端工程師',
          image: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'
        }
      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .px-5 {
    padding: 0 !important
  }
}
</style>
