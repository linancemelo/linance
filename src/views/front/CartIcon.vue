<template>
  <div class="shopicon text-center">
    <i class="fa-5x bi bi-bag-check"></i>
  </div>
  <div class="num">{{ qty }}</div>
</template>

<script>
export default {
  props: ["qty"],
};
</script>

<style scoped>
.shopicon {
  width: 70px;
  height: 70px;
  padding: 5px;
  position: fixed;
  z-index: 1000;
  bottom: 10vh;
  right: 40px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 50%;
}
.shopicon .bi {
  font-size: 2rem;
}
.num {
  width: 30px;
  height: 30px;
  position: fixed;
  z-index: 1000;
  bottom: 15.5vh;
  right: 32px;
  background-color: #be6064;
  text-align: center;
  border-radius: 50%;
  color: #fff;
}
</style>
