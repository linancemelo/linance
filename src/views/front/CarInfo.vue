<template>
  <!-- navbar -->
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
  <router-view></router-view>
  <Footer></Footer>
  <div class="back-to-top" @click.prevent="backToTop">
    <i class="bi bi-chevron-double-up"></i>
  </div>
</template>

<script>
import Footer from '@/components/front/Footer.vue'
export default {
  components: { Footer },
  data () {
    return {
      scrollTop:
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    }
  },
  methods: {
    changeBg () {
      this.$refs.nav.classList.toggle('bg-white')
    },
    watchScroll () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop >= 1000) {
        document.querySelector('.back-to-top').style.opacity = 1
      } else {
        document.querySelector('.back-to-top').style.opacity = 0
      }
    },
    backToTop () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop >= 1000) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
  }
}
</script>

<style scoped lang="scss">
$main: #ca585f;
.back-to-top {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffb700;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0;
}
.navbar {
    background-color: transparent;
    --bs-navbar-color: #fff;
    --bs-btn-hover-color: #fff;

    .container-fluid{
      position: relative;
      a {
        color: #000 !important;
        &:hover {
          color: $main  !important
        }
      }
    }
  }
@media screen and (min-width: 991.9px) {
  .navbar{
    .container-fluid{
      .navbar-collapse{
        .nav-center{
          .car-link{
            display: flex;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
}
@media screen and (max-width: 991.9px) {
  .navbar {
    .container-fluid {
      padding-right: 0;
      .navbar-collapse {
        text-align: center;
      }
    }
  }

}
</style>
