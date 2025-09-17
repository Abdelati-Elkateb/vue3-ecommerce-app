<template>
  <v-app>
    <v-container class="layout">
      <!-- Header -->
      <HeaderNavLanding />

      <!-- Main Content -->
      <router-view />

      <!-- Footer -->
      <Footer />
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import HeaderNavLanding from '../components/HeaderNavLanding.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.layout {
  max-width: 1200px; /* أو أي قيمة انت تبيها */
  margin: 0 auto; /* يخلي المحتوى بالوسط */
}
</style>
