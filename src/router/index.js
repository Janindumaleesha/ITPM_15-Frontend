import Vue from "vue";
import VueRouter from "vue-router";
import Allinvoices from "../views/Invoice/AllInvoices.vue";
import Addinvoice from "../views/Invoice/AddInvoice.vue";

import Allitems from "../views/Item/AllItems.vue";
import Additem from "../views/Item/AddItem.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/allinvoices",
    name: "Allinvoices",
    component: Allinvoices,
  },
  {
    path: "/addinvoice",
    name: "Addinvoice",
    component: Addinvoice,
  },
  {
    path: "/allitems",
    name: "Allitems",
    component: Allitems,
  },
  {
    path: "/additem",
    name: "Additem",
    component: Additem,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
