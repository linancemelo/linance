<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <a class="col-3" href="#"
      ><img
        src="https://fontmeme.com/permalink/220817/856b96ffa68f2c0888d4e4672ac39f66.png"
        alt="tesla-font"
        border="0"
    /></a>
    <button
      class="btn navbar-toggler fo-50"
      style="
        font-size: 0.7rem;
        background-color: rgba(255, 255, 255, 0.3);
        padding: 0.3rem 0.6rem;
        font-size: 1rem;
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      選單
    </button>
    <div
      class="collapse navbar-collapse col-6 fs-6"
      id="navbarSupportedContent"
    ></div>
    <div
      class="collapse navbar-collapse col-3"
      id="navbarSupportedContent"
      style="font-size: 16px"
    >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="bi bi-suit-heart"></i>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">
            <i class="bi bi-cart"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
