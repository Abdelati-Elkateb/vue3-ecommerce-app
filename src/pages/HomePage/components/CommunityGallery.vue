<template>
    <main class="custom-margin">
             <div class="full-width">
        <v-row class="pa-12" align="center" justify="center">
            <v-col cols="12" class="text-center">
                <h1 class="h1 font-weight-bold mb-6">Community Gallery</h1>
                <p class="mb-6">
                    Discover how our customers style their spaces with our products.
                    Share your own photos with us using #OurBrandStyle for a chance to be featured!
                </p>
                <v-btn class="buy-Shop" elevation="2">Shop Now</v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="2">
                <v-img height="382" cover src="/src/assets/images/Rectangle 36.png"></v-img>
            </v-col>

            <v-col cols="4" class="d-flex align-end">
                <v-img height="312" cover src="/src/assets/images/Rectangle 38.png"></v-img>
            </v-col>

            <v-col cols="3" class="d-flex align-end">
                <v-img height="392" cover src="/src/assets/images/Rectangle 40.png"></v-img>
            </v-col>

            <v-col cols="2">
                <v-img height="348" cover src="/src/assets/images/Rectangle 43.png"></v-img>
            </v-col>

            <v-col cols="1">
                <v-img height="348" cover src="/src/assets/images/Rectangle 45.png"></v-img>
            </v-col>

            <v-col cols="3">
                <v-img height="433" cover src="/src/assets/images/Rectangle 37.png"></v-img>
            </v-col>

            <v-col cols="3">
                <v-img height="423" cover src="/src/assets/images/Rectangle 39.png"></v-img>
            </v-col>

            <!-- <v-col cols="2">
        <v-img height="242" cover src="/src/assets/images/Rectangle 41.png"></v-img>
      </v-col> -->

            <!-- <v-col cols="2">
        <v-img height="242" cover src="/src/assets/images/Rectangle 44.png"></v-img>
      </v-col> -->
        </v-row>
    </div>
    </main>

</template>

<style scoped>
.v-img {
    object-fit: cover;
    /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); */
}
</style>
