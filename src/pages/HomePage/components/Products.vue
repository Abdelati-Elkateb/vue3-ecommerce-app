<template>
  <main class="tw:py-20">
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold">Our Products</h2>
      </div>

      <div class="tw:grid tw:md:grid-cols-2 tw:lg:grid-cols-4 tw:gap-6 tw:mb-4">
        <div v-for="n in 8" :key="n">
          <v-hover v-slot="{ isHovering, props }">
            <v-card class="tw:mx-auto tw:bg-[#f4f4f7] rounded-lg tw:grid tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-6 tw:mb-4"  v-bind="props">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="h-[300px] rounded-t-lg"
                cover
              ></v-img>

              <v-card-text class="tw:pt-6 tw:mb-2">
                <div class="text-gray-500 text-lg mb-2">Syltherine</div>
                <h3 class="text-orange-600 text-lg mb-2">Stylish cafe chair</h3>
                <div class="text-gray-500 text-lg mb-2">Syltherine</div>
              </v-card-text>

              <!-- Overlay عند hover -->
              <v-expand-transition>
                <div
                  v-if="isHovering"
                  class="tw:absolute tw:inset-0 tw:flex tw:flex-col tw:items-center tw:justify-center tw:bg-gray-900/90 tw:text-white tw:z-20"
                >
                  <v-btn class="bg-white text-orange-600 font-bold py-3 px-8 mt-8">Shop Now</v-btn>

                  <div class="tw:flex tw:gap-4 tw:mt-4">
                    <div class="tw:flex tw:items-center tw:gap-1">
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
        </div>
      </div>
  </main>
</template>

<script setup lang="ts">
</script>