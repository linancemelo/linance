<template>
  <div class="home">
    <!-- navbar -->
    <!-- test -->
    <nav class="navbar navbar-expand-lg fixed-top" ref="nav">
      <div class="container-fluid">
        <router-link class="fs-5" to="/"
        >πΏπΎππΆππΈπ</router-link>

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
            <div class="nav-item car-link">
              <li class="nav-item">
                <router-link :to="{name: 'models'}" class="nav-link" href="#">Model S</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'model3'}" class="nav-link" href="#">Model 3</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'modelx'}" class="nav-link" href="#">Model X</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{name: 'modely'}" class="nav-link" href="#">Model Y</router-link>
              </li>
            </div>
            <li class="nav-item fs-7">
              <router-link to="/store" class="nav-link">εεΊ</router-link>
            </li>
            <li class="nav-item fs-7">
              <router-link to="/login" class="nav-link">εΈ³ζΆ</router-link>
            </li>
            <li class="nav-item fs-7">
              <router-link to="/about" class="nav-link">ιζΌζε</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- θΌͺζ­ε -->
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
              <router-link to="/store" class="btn btn-warning btn-md mt3 "
                >ζ₯ηζ΄ε€</router-link>
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
          εΌε·ε‘θ»ηε―¦η¨ζ§θθ·θ»ηε ιζ§θ½
        </p>
        <router-link to="/store" class="btn btn-warning btn-md mt3 "
          >ζ·±ε₯δΊθ§£</router-link
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
        <h1 class="card-title" data-aos="fade-up">θ½ζΊηΈιη’ε</h1>
        <p class="card-text fs-9" data-aos="fade-up">ε¨ζΉδ½θ½ζΊδΎζ</p>
        <router-link to="/store" class="btn btn-warning btn-md mt3 "
          >ζ·±ε₯δΊθ§£</router-link
        >
      </div>
    </div>
    <!-- η²ΎιΈιδ»Ά -->
    <div class="card text-white border-0 section">
      <img
        src="https://mahonpointsc.ie/wp-content/uploads/2021/10/Tesla-Showroom.jpg"
        class="card-img rounded-0"
        alt="..."
      />
      <div
        class="card-img-overlay text-center d-flex flex-column justify-content-end align-items-center"
      >
        <h1 class="card-title" data-aos="fade-up">η²ΎιΈιδ»Ά</h1>
        <p class="card-text fs-9" data-aos="fade-up">ε?’θ£½εε°ε±¬θ»θΌ</p>
        <router-link to="/store" class="btn btn-warning btn-md mt3 "
          >ζ·±ε₯δΊθ§£</router-link
        >
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/front/Footer.vue'

export default {
  components: {
    Footer
  },
  data () {
    return {
      imgList: [
        {
          src: 'https://www.ddcar.com.tw/photos/shares/2021/09/10/22411/01-8c6c0a723c.jpeg',
          title: 'Model S',
          content:
            'Model Sε°ηΊιεΊ¦εηΊθͺθζι οΌε·ζεΊηΎηε ιθ½εγη‘θε«ζ―ηζ§θ½θη΅ηΎε€θ§γ'
        },
        {
          src: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/1a5ba4b1-efd8-40bc-8b6d-e81bf8223e37/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-LHD',
          title: 'Model 3',
          content:
            'Model 3ε°ηΊηΌζ?ι«ζη΄ι»εεζ§θ½θθ¨­θ¨οΌε·ζιι¦¬ιε¨θΌͺι©εγι·ηΊθͺιη¨εεΏ«ιει»η­ηΉθ²γ'
        },
        {
          src: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/10accb74-6710-4826-ba35-926846c140b5/bvlatuR/std/2560x1440/Model-X-Performance-Hero-Desktop-LHD',
          title: 'Model X',
          content:
            'Model XηΊTeslaηΆε?Άηη΄ι»ειεδΌζθ»οΌιεε¨ζεθΌͺι©εδΈδΉεη©Ίιε―¬ζοΌε―ε?Ήη΄7εζδΊΊεεΆι¨θΊ«θ‘ζγ'
        },
        {
          src: 'https://d5ttlem47o98b.cloudfront.net/s3fs-public/styles/banner/public/2022-06/004_19.jpg?itok=pwuKGzf2',
          title: 'Model Y',
          content: 'Model Yθ½ε¨ι¨ε€©γδΈιͺε€©γζ³₯ε°ειζ­£θ¦θ·―ι’θ‘ι§γ'
        }
      ]
    }
  },
  methods: {
    changeBg () {
      this.$refs.nav.classList.toggle('bg-white')
    }
  }
}
</script>

<style src="../../assets/css/front/home.scss" lang="scss">
</style>
