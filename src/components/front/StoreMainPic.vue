<template>
  <!-- mainPic -->
  <div class="card text-white border-0">
    <div class="col discount py-2">
      <span class="content fs-7"><i class="bi bi-tags"></i> 結帳輸入 tesla66，立即享有6折優惠！</span>
    </div>
    <img
      src="https://www.supertalk.fm/wp-content/uploads/2022/08/b5267580-9c61-4fd1-80dc-801b7223f172.jpeg"
      class="img-fluid card-img rounded-0"
      alt="..."
    />
    <div
      class="card-img-overlay text-center d-flex flex-column justify-content-end pb-4"
    >
      <h1 class="card-title text-warning">客製化您的汽車</h1>
      <p class="card-text fs-8">線上完成購買享有９折優惠</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .card{
    width: 100vw;
  }
  .discount{
    width: 100%;
    position: absolute;
    background-color: rgba(0,0,0,.5);
  }
  .content{
    animation: run 12s linear infinite;
    overflow: hidden;
    position: relative;
  }
  @keyframes run {
  /* 動作的起始位置*/
  from {
    left: 100%;
  }
  /*動作的結束位置*/
  to {
    left: -20%;
  }
  }
  @media screen and (max-width: 576px){
    .card-text{
      display: none;
    }
  }
</style>
