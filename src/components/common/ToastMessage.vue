<template>
  <div
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="toast"
  >
    <div class="toast-header">
      <i :class="`text-${msg.style}`" class="bi bi-chat-left-text-fill me-3 d-inline-block"></i>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button
        type="button"
        class="btn-close me-1"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast'
export default {
  name: 'Toast',
  props: ['msg'],
  mounted () {
    const toastEl = this.$refs.toast
    const toast = new Toast(toastEl, {
      delay: 3000
    })
    toast.show()
  }
}
</script>

<style scoped>
.toast {
--bs-toast-border-radius: 0
}
</style>
