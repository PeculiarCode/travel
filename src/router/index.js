import Vue from 'vue';
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component:()=>import('@/page/home/Home.vue')
    },
    {
      path: "/city",
      name: "city",
      component:()=>import('@/page/city/Home.vue')
    },
    {
      path: "/detail/:id",
      name: "detail",
      component:()=>import('@/page/detail/Detail.vue')
    },
  ]
});
