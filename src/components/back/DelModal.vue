<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">再次確認</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否確認要刪除？？？
          <!-- 是否要刪除『 <strong>{{ item.title }}</strong> 』此產品？ -->
        </div>
        <div class="modal-footer">
          <button @click="$emit('del-item')" type="button" class="btn btn-danger">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins'
export default {
  props: {
    item: {}
  },
  data () {
    return {
      modal: {}
    }
  },
  mixins: [modalMixins]
}
</script>

<style></style>
