<template>
  <main class="mt-12">
    <v-footer class=" py-8  border-gray-200">
      <v-container>
        <v-row>
          <v-col cols="12" md="3" class="mb-6 md:mb-0">
            <v-list>
              <v-list-item>
                <h4 class="text-2xl font-bold">Funiro.</h4>
                <v-list-subtitle class="text-base text-[#9F9F9F]">400 University Drive Suite 200 Coral Gables,
                 <br> FL 33134 USA</v-list-subtitle>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="6" md="2" class="mb-6 md:mb-0">
            <v-list>
              <v-list-item>
                <v-list-item-title> Home</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title> Shop</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>About</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="6" md="2" class="mb-6 md:mb-0">
            <v-list>
              <v-list-item>
                <v-list-item-title> Help</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title> Payment Options</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title> Returns</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Privacy Policies</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="4">
            <p class="text-[#9F9F9F] text-base font-semibold mb-2">Newsletter</p>
            <div class="flex items-center gap-2">
        <v-text-field label="enter your Address" variant="underlined"></v-text-field>
              <v-btn color="primary" class="rounded-lg px-6 py-2 text-white font-semibold shadow-md" elevation="2">
                Subscribe
              </v-btn>
            </div>
            <p class="text-xs text-[#9F9F9F] mt-2">Get the latest news and offers.</p>
          </v-col>
        </v-row>
        <v-divider class="my-6" />
        <div class="text-[#9F9F9F] text-sm mt-4">© 2025 Funiro. All rights reserved.</div>
      </v-container>
    </v-footer>
  </main>
</template>