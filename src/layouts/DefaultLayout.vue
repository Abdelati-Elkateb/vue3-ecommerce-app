<template>
        <v-app>
    <HeaderNav />
    <v-main class="pa-10">
        <router-view />
            <FooterNav />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HeaderNav from "../components/HeaderNavLanding.vue"
import FooterNav from "../components/Footer.vue"
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>
