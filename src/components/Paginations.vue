<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          @click.prevent="prev"
          class="page-link"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page == pages.current_page }"
      >
        <a @click.prevent="updatedPage(page)" class="page-link" href="#">{{
          page
        }}</a>
      </li>
      <li class="page-item">
        <a @click.prevent="next" class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages"],
  methods: {
    updatedPage(page) {
      this.$emit("update-page", page);
    },
    next() {
      if (this.pages.current_page == this.pages.total_pages) return;
      this.pages.current_page++;
      this.updatedPage(this.pages.current_page);
    },
    prev() {
      if (this.pages.current_page == 1) return;
      this.pages.current_page--;
      this.updatedPage(this.pages.current_page);
    },
  },
};
</script>

<style scoped src="../assets/css/pagination.css"></style>
