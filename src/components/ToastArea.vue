<template>
  <div class="toast-container position-absolute pe-5 pt-5 top-0 end-0">
    <ToastMessage
      v-for="(msg, key) in messages"
      :key="key"
      :msg="msg"
    ></ToastMessage>
  </div>
</template>

<script>
import ToastMessage from "@/components/ToastMessage.vue";

export default {
  components: { ToastMessage },
  data() {
    return {
      messages: [],
    };
  },
  inject: ["emitter"],
  mounted() {
    this.emitter.on("push-message", (message) => {
      const { style = "success", title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
