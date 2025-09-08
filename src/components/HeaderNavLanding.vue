<template>
  <!-- الـ Navbar -->
  <v-app-bar class="h-[100px] mt-auto" color="green darken-4" >
    <!-- الشعار -->
    <v-app-bar-title>
      <img :src="logo" alt="Logo" />
    </v-app-bar-title>

    <!-- الروابط (Desktop فقط) -->
    <div class="d-none d-md-flex justify-center flex-grow-1">
      <v-btn text>Home</v-btn>
      <v-btn text>Shop</v-btn>
      <v-btn text>About</v-btn>
      <v-btn text>Contact</v-btn>
    </div>

    <!-- الأيقونات -->
    <template v-slot:append>
      <!-- زر Menu يظهر في الموبايل -->
      <v-btn icon class="d-md-none" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- أيقونات تظهر في Desktop -->
      <div class="d-none d-md-flex gap-2">
        <v-btn icon="mdi-account"></v-btn>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-heart"></v-btn>
        <v-btn icon="mdi-cart-minus"></v-btn>
      </div>
    </template>
  </v-app-bar>

  <!-- Drawer للموبايل -->
  <v-navigation-drawer v-model="drawer" temporary location="left">
    <v-list>
      <v-list-item v-for="item in menuItems" :key="item" @click="drawer = false">
        <v-list-item-title>{{ item }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue"
import logo from "../assets/images/logo_cropped.png"

const drawer = ref(false)
const menuItems = ["Home", "Shop", "About", "Contact"]
</script>
