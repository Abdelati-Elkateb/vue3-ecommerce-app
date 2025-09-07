// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import DefaultLayout from "../layouts/DefaultLayout.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: DefaultLayout, 
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("../pages/HomePage/HomePage.vue"),
      },
      {
        path: "shop",
        name: "shop",
        component: () => import("../pages/ShopPage/ShopPage.vue"), 
      },
      {
        path: "ProductDetails/:id",
        name: "ProductDetails",
        component: () => import("../pages/ProductDetails/ProductDetails.vue"), 
      },
      {
        path: "ProductComparison",
        name: "ProductComparison",
        component: () => import("../pages/ProductComparison/ProductComparison.vue"),
      },
      {
        path: "Cart",
        name: "Cart",
        component: () => import("../pages/Cart/Cart.vue"),
      },
      {
        path: "Checkout",
        name: "Checkout",
        component: () => import("../pages/Checkout/Checkout.vue"), 
      },
      {
        path: "ContactUs",
        name: "ContactUs",
        component: () => import("../pages/Contact/Contact.vue"), 
      }
    ],
  }
]

const router = createRouter({
  history: createWebHistory(),
    routes,
})

export default router
