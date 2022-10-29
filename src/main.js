import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { currency, date } from './methods/filters'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { email, required, min } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
AOS.init()

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$filters = {
  currency, date
}
app.component('Carousel', Carousel)
app.component('Slide', Slide)
app.component('Pagination', Pagination)
app.component('Navigation', Navigation)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.component('Loading', Loading)

app.use(VueAxios, axios)
app.use(router)
app.use(AOS)
app.mount('#app')
