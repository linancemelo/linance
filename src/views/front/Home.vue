<template>
  <div class="home">
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg fixed-top" ref="nav">
      <div class="container-fluid">
        <router-link class="fs-5" to="/"
        >𝐿𝒾𝓃𝒶𝓃𝒸𝑒</router-link>

        <button
        class="btn navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click.prevent="changeBg()"
        >
          <i class="bi bi-list"></i>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="nav-center navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/product/-N9Eg4ltDi2cGMOrJGr-" class="nav-link" href="#">Model S</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product/-N9ElGaAdLd1q5VERyXV" class="nav-link" href="#">Model 3</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product/-N9ElysEd3KVeMjDD9hs" class="nav-link" href="#">Model X</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product/-N9Em_5rOYC-oKzXc3J2" class="nav-link" href="#">Model Y</router-link>
            </li>
            <li class="nav-item fs-8">
              <router-link to="/store" class="nav-link">商店</router-link>
            </li>
            <li class="nav-item fs-8">
              <router-link to="/login" class="nav-link">帳戶</router-link>
            </li>
            <li class="nav-item fs-8">
              <router-link to="/about" class="nav-link">關於我們</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- 輪播圖 -->
    <Carousel
      :autoplay="4000"
      :transition="1500"
      :wrapAround="true"
      :settings="settings"
      :breakpoints="breakpoints"
      class="section"
    >
      <Slide v-for="(img, key) in imgList" :key="key">
        <div class="carousel__item w-100 h-100">
          <img :src="img.src" class="d-block w-100 h-100 img-fluid" alt="..." />
          <div class="content text-light">
            <h1 data-aos="fade-up" data-aos-duration="2000">{{ img.title }}</h1>
            <p class="description" data-aos="fade-up" data-aos-duration="2000">{{ img.content }}</p>
            <p>
              <router-link to="/store" class="btn btn-warning btn-md mt3 rounded-pill"
                >查看更多</router-link>
            </p>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </Carousel>
    <!-- CyberTruck -->
    <div class="card text-white border-0 section">
      <img
        src="https://cdn2.ettoday.net/images/5781/5781707.jpg"
        class="card-img rounded-0"
        alt="..."
      />
      <div
        class="card-img-overlay text-center d-flex flex-column justify-content-end align-items-center"
      >
        <h1 class="card-title" data-aos="fade-up">Cybertruck</h1>
        <p class="card-text fs-9" data-aos="fade-up">
          兼具卡車的實用性與跑車的加速性能
        </p>
        <router-link to="/store" class="btn btn-warning btn-md mt3 rounded-pill"
          >深入了解</router-link
        >
      </div>
    </div>
    <!-- Powerwall&SoloaRoof -->
    <div class="card text-white border-0 section">
      <img
        src="https://www.tesla.com/sites/default/files/powerwall/design/D_PW_Design_2100x1800.jpg"
        class="card-img rounded-0"
        alt="..."
      />
      <div
        class="card-img-overlay text-center d-flex flex-column justify-content-end align-items-center"
      >
        <h1 class="card-title" data-aos="fade-up">能源相關產品</h1>
        <p class="card-text fs-9" data-aos="fade-up">全方位能源供應</p>
        <router-link to="/store" class="btn btn-warning btn-md mt3 rounded-pill"
          >深入了解</router-link
        >
      </div>
    </div>
    <!-- 精選配件 -->
    <div class="card text-white border-0 section">
      <img
        src="https://mahonpointsc.ie/wp-content/uploads/2021/10/Tesla-Showroom.jpg"
        class="card-img rounded-0"
        alt="..."
      />
      <div
        class="card-img-overlay text-center d-flex flex-column justify-content-end align-items-center"
      >
        <h1 class="card-title" data-aos="fade-up">精選配件</h1>
        <router-link to="/store" class="btn btn-warning btn-md mt3 rounded-pill"
          >深入了解</router-link
        >
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Footer from '@/components/front/Footer.vue'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Footer
  },
  data () {
    return {
      imgList: [
        {
          src: 'https://www.ddcar.com.tw/photos/shares/2021/09/10/22411/01-8c6c0a723c.jpeg',
          title: 'Model S',
          content:
            'Model S專為速度和續航而打造，具有出眾的加速能力、無與倫比的性能與絕美外觀。'
        },
        {
          src: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/1a5ba4b1-efd8-40bc-8b6d-e81bf8223e37/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-LHD',
          title: 'Model 3',
          content:
            'Model 3專為發揮高效純電動力性能而設計，具有雙馬達全輪驅動、長續航里程和快速充電等特色。'
        },
        {
          src: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/10accb74-6710-4826-ba35-926846c140b5/bvlatuR/std/2560x1440/Model-X-Performance-Hero-Desktop-LHD',
          title: 'Model X',
          content:
            'Model X為Tesla當家的純電動運動休旅車，配備全時四輪驅動且乘坐空間寬敞，可容納7名成人及其隨身行李。'
        },
        {
          src: 'https://d5ttlem47o98b.cloudfront.net/s3fs-public/styles/banner/public/2022-06/004_19.jpg?itok=pwuKGzf2',
          title: 'Model Y',
          content: 'Model Y能在雨天、下雪天、泥地和非正規路面行駛。'
        }
      ]
    }
  },
  methods: {
    changeBg () {
      console.log(this.$refs)
      this.$refs.nav.classList.toggle('bg-white')
    }
  }
}
</script>

<style src="../../assets/css/front/home.scss" lang="scss">
</style>
