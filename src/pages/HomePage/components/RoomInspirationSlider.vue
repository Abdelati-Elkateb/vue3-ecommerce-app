<template>
    <div class="full-width">
        <v-row class="main">
            <!-- fix this one -->
            <v-col cols="5">

                <div class="d-flex flex-column justify-center  h-100 px-12">
                    <v-container class="">
                        <v-title class="h1 font-weight-black">
                            50+ Beautiful rooms
                            inspiration
                        </v-title>
                        <p class="my-4 text-md">
                            Our designer already made a lot of beautiful prototipe of rooms that inspire you
                        </p>
                        <v-btn class="buy-Shop">
                            Explore More
                        </v-btn>
                    </v-container>
                </div>


            </v-col>
            <v-col class="">

                <v-carousel class="h-100" hide-delimiters>
                    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
                    <div class="d-flex flex-column align-center justify-center"
                        style="position: absolute; bottom: 10px; left: 20px; right: 0; background: rgba(255, 255, 255, 0.7); padding: 40px; width: 50%;">
                        <span>
                            Bed Room
                        </span>
                        <p>
                            Inner Peace
                        </p>
                    </div>
                </v-carousel>
            </v-col>

            <v-col class="text-center">
                <v-carousel class="slider" hide-delimiters>
                    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

                    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

                    <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </div>

</template>


<style scoped>
.main {
    width: 100%;
    height: 100vh;
    background: #FCF8F3;
}

.buy-Shop {
    background-color: #B88E2F;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-transform: none;
    height: 48px;
    width: 179px;
    margin-top: 30px;
}

.h1 {
    font-size: 40px;
}

.v-btn--elevated v-btn--icon v-theme--light v-btn--density-default {
    display: none !important;
}

.slider {
    height: 85vh !important;
}
</style>


<script setup>
const items = [
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
]
</script>