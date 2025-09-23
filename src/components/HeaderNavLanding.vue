<template>
  <header class="tw:flex tw:justify-between tw:items-center tw:h-[100px]">
    
    <!-- الشعار -->
    <div>
      <img :src="logo" alt="Logo" height="40" />
    </div>

    <!-- روابط -->
    <nav class="d-none d-md-flex gap-6">
      <v-btn variant="text" class="text-[#333]" v-for="item in menuItems" :key="item">
        {{ item }}
      </v-btn>
    </nav>

    <!-- أيقونات -->
    <div class="d-flex gap-3 align-center">
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-cart-minus</v-icon></v-btn>
    </div>

  </header>
</template>

<script setup lang="ts">
import logo from "../assets/images/logo_cropped.png"
const menuItems = ['Home', 'Shop', 'About', 'Contact']
</script>