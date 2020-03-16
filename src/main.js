import Vue from 'vue';
import App from './App.vue';
import 'styles/reset.css';
import 'styles/border.css';
import router from './router';
import fastClick from 'fastclick';
import axios from 'axios';
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
