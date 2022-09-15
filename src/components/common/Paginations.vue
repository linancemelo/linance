<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          @click.prevent="prev"
          class="page-link"
          :class="{'disabled': tempPages.current_page===1}"
          href="#"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in tempPages.total_pages"
        :key="page"
        :class="{ active: page == pages.current_page}"
      >
        <a @click.prevent="updatedPage(page)" class="page-link" href="#">{{
          page
        }}</a>
      </li>
      <li class="page-item">
        <a
        @click.prevent="next"
        class="page-link"
        :class="{'disabled': tempPages.current_page===tempPages.total_pages}"
        href="#"
        aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pages: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      tempPages: this.pages
    }
  },
  methods: {
    updatedPage (page) {
      this.$emit('update-page', page)
    },
    next () {
      if (this.tempPages.current_page === this.tempPages.total_pages) return
      this.tempPages.current_page++
      this.updatedPage(this.tempPages.current_page)
    },
    prev () {
      if (this.tempPages.current_page === 1) return
      this.tempPages.current_page--
      this.updatedPage(this.tempPages.current_page)
    }
  }
}
</script>

<style scoped src="../../assets/css/pagination.css"></style>
