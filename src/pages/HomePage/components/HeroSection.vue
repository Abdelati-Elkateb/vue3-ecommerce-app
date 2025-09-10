<template>
    <v-parallax class="hero-cover" :src="coverHero">

        <v-card class="float-right ma-4 w-md-10vw" max-width="643" hover>
            <v-card-item class="h-[443px] bg-[#FFF3E3]">
                <v-container class="">
                    <v-card-title class="text-base">
                        New Arrival
                    </v-card-title>
                    <h1 class="font-weight-bold text-[52px] mb-4 text-[#B88E2F] font-bold w-75"> Discover Our New Collection</h1>

                    <p class="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                        mattis.
                    </p>

                    <v-btn class="buy-Shop" height="72" min-width="164">
                        BUY Now
                    </v-btn>
                </v-container>

            </v-card-item>


        </v-card>
    </v-parallax>
</template>

<script setup lang="ts">
import coverHero from "/src/assets/images/scandinavian-interior-mockup-wall-decal-background 1 (1).png"

</script>

<style scoped>
.hero-cover {
    background: url(../img/slider.jpg) no-repeat center center fixed;
    height: calc(100vh - 100px);
    background-size: cover;
    display: flex;
    align-items: center;
}

.buy-Shop {
    background-color: #B88E2F;
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-transform: none;
    height: 74px;
    width: 222px;
    margin-top: 30px;
}
</style>
