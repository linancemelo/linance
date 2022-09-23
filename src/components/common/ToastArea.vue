<template>
  <div class="toast-container">
    <ToastMessage
      v-for="(msg, key) in messages"
      :key="key"
      :msg="msg"
    ></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from '@/components/common/ToastMessage.vue'

export default {
  components: { ToastMessage },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>

<style scoped>
  .toast-container {
    position: fixed;
    top: 2.5rem;
    right: 2rem;
  }

  @media screen and (max-width: 992px) {
    .toast-container {
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
