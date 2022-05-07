import Vue from "vue";
import VueRouter from "vue-router";
import Allinvoices from "../views/Invoice/AllInvoices.vue";
import InvoiceGeneratereport from "../views/Invoice/GenerateReport.vue";

import Allitems from "../views/Item/AllItems.vue";
import Itemgeneratereport from "../views/Item/GenerateReport.vue";

import Allsuppliers from "../views/Supplier/AllSuppliers.vue";
import Suppliergeneratereport from "../views/Supplier/GenerateReport.vue";

import Allcustomers from "../views/Customer/AllCustomers.vue";
import Generatereport from "../views/Customer/GenerateReport.vue";

import Dashboard from "../views/Dashboard/Dashboard.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/allinvoices",
    name: "Allinvoices",
    component: Allinvoices,
  },
  {
    path: "/invoiceGeneratereport",
    name: "InvoiceGeneratereport",
    component: InvoiceGeneratereport,
  },
  {
    path: "/allitems",
    name: "Allitems",
    component: Allitems,
  },
  {
    path: "/itemgeneratereport",
    name: "Itemgeneratereport",
    component: Itemgeneratereport,
  },
  {
    path: "/allsuppliers",
    name: "Allsuppliers",
    component: Allsuppliers,
  },
  {
    path: "/suppliergeneratereport",
    name: "Suppliergeneratereport",
    component: Suppliergeneratereport,
  },
  {
    path: "/allcustomers",
    name: "Allcustomers",
    component: Allcustomers,
  },
  {
    path: "/generatereport",
    name: "Generatereport",
    component: Generatereport,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
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
