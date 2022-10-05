<template>
  <Loading :active='isLoading'></Loading>
  <div class="col-md-10 px-5 d-flex flex-wrap">
    <div class="row">
      <div class="card col-6 col-md-4 col-lg-3 border-0 mb-2" v-for="user in userList" :key="user.id">
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
          name: 'Elon Musk',
          title: '執行長',
          image: 'https://i.pinimg.com/564x/1b/d5/57/1bd5572b6facaacecebe9d11699dea42.jpg'
        },
        {
          name: 'Len Vadi',
          title: '企劃總監',
          image: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg'
        },
        {
          name: 'Mitchell Argueta',
          title: '品牌總監',
          image: 'https://xsgames.co/randomusers/assets/avatars/female/61.jpg'
        },
        {
          name: 'Mack Tolmie',
          title: '汽車總監',
          image: 'https://xsgames.co/randomusers/assets/avatars/male/60.jpg'
        },
        {
          name: 'Devorah Pieczarka',
          title: '服飾總監',
          image: 'https://xsgames.co/randomusers/assets/avatars/female/56.jpg'
        },
        {
          name: 'Melvin Rosplock',
          title: '行銷公關',
          image: 'https://xsgames.co/randomusers/assets/avatars/male/22.jpg'
        },
        {
          name: 'Natasha Bilbo',
          title: '前端工程師',
          image: 'https://xsgames.co/randomusers/assets/avatars/female/39.jpg'
        },
        {
          name: 'Wilbur Mandis',
          title: '後端工程師',
          image: 'https://xsgames.co/randomusers/assets/avatars/male/37.jpg'
        }
      ],
      teamList: [],
      isLoading: false
    }
  }
}
</script>

<style scoped>
.card-body{
  border: 1px solid #ccc;
  border-top: 0;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
@media screen and (max-width: 576px) {
  .px-5 {
    padding: 0 !important
  }
}
</style>
