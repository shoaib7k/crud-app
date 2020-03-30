import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/add-product",
      alias: "/add-product",
    //  name: "product",
      component: () => import("./components/AddProduct")
    },
   
    {
      path: "/add-brand",
      name: "brand",
      component: () => import("./components/AddBrand")
    }
  ]
});