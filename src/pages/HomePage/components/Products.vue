<template>
  <v-main>
    <v-container class="w-full mt-12 mb-12">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold">Our Products</h2>
      </div>

      <v-row>
        <v-col v-for="n in 4" :key="n" cols="3" class="relative">
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="mx-auto bg-gray-100 rounded-lg" max-width="600" v-bind="props">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="h-[300px] rounded-t-lg"
                cover
              ></v-img>

              <v-card-text class="pt-6">
                <div class="text-gray-500 text-lg mb-2">Syltherine</div>
                <h3 class="text-orange-600 text-lg mb-2">Stylish cafe chair</h3>
                <div class="text-gray-500 text-lg mb-2">Syltherine</div>
              </v-card-text>

              <!-- Overlay عند hover -->
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 text-white z-20"
                >
                  <v-btn class="bg-white text-orange-600 font-bold py-3 px-8 mt-8">Shop Now</v-btn>

                  <div class="flex gap-4 mt-4">
                    <div class="flex items-center gap-1">
                      <v-icon size="20">mdi-share</v-icon>
                      <span>Share</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <v-icon size="20">mdi-compare</v-icon>
                      <span>Compare</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <v-icon size="20">mdi-heart</v-icon>
                      <span>Like</span>
                    </div>
                  </div>
                </div>
              </v-expand-transition>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
</script>
