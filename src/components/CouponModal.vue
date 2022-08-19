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
    <!-- CouponModal -->
    <div class="modal-dialog" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-secondary text-white">
          <h5 class="modal-title ms-2" id="exampleModalLabel">
            <span>新增優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close me-1"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <div>
              <div class="mb-2">
                <label for="title" class="form-label">優惠券名稱</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入優惠券名稱"
                  v-model="tempCoupon.title"
                />
              </div>

              <div class="mb-2">
                <label for="percent" class="form-label">折數%</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  class="form-control"
                  id="percent"
                  placeholder="請輸入折數"
                  v-model="tempCoupon.percent"
                />
              </div>
              <div class="mb-2">
                <label for="code" class="form-label">優惠券代碼</label>
                <input
                  type="text"
                  class="form-control"
                  id="code"
                  placeholder="請輸入優惠代碼"
                  v-model="tempCoupon.code"
                />
              </div>

              <div class="mb-2">
                <label for="due-date" class="form-label">有效日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="due_date"
                  placeholder="請輸入有效日期"
                  v-model="tempCoupon.due_date"
                />
              </div>
              <div class="mb-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempCoupon.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否有效
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            @click="$emit('update-change-coupon', tempCoupon)"
            type="button"
            class="btn btn-primary"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from "@/mixins/modalMixins";

export default {
  props: {
    coupon: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    coupon() {
      this.tempCoupon = this.coupon;
    },
  },
  data() {
    return {
      modal: {},
      tempCoupon: {},
    };
  },

  mixins: [modalMixins],

  // methods: {
  //   uploadImg() {
  //     const uploadFile = this.$refs.imgInput.files[0];
  //     const formData = new FormData();
  //     formData.append("file-to-upload", uploadFile);
  //     const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
  //     this.axios.post(api, formData).then((res) => {
  //       console.log(res.data);
  //       if (res.data.success) {
  //         this.tempProduct.imageUrl = res.data.imageUrl;
  //       }
  //     });
  //   },
  // },
};
</script>

<style></style>
