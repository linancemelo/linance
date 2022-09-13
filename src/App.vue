<template>
  <router-view></router-view>
  <ToastArea></ToastArea>
</template>
<script>
import emitter from '@/methods/emitter'
import ToastArea from '@/components/ToastArea.vue'
export default {
  components: {
    ToastArea
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style lang="scss">
@import "./assets/all.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700;1,800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
li {
  list-style: none;
}
a{
  text-decoration: none;
  color: #000;
}
.navbar {
  padding: 0.2rem !important;
}
.navbar a {
  color: #000;
}
.navbar a:hover {
  color: #be6064;
}
.fo-50 {
  color: #000 !important;
  opacity: 50%;
}
.fs-7 {
  font-size: 0.9rem;
}
.fs-8 {
  font-size: 0.8rem;
}
.fs-9{
  font-size: 0.7rem;
}
</style>
