<template>
    <v-main class="h-screen mt-12 mb-12">
    <v-container class="">
        <div>
            <h2 class="text-center mb-6 text-3xl font-bold">Browse The Range</h2>
            <p class="text-center mb-9 text-lg text-[#8C8C8C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <v-row>
            <v-col v-for="n in image" :key="n" class="d-flex child-flex" cols="4">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <v-img :lazy-src="image" :src="n" aspect-ratio="1"
                                class="bg-grey-lighten-2 h-[521px] rounded" cover>
                            </v-img>
                        </div>
                        <div class="flip-card-back d-flex flex-column align-center justify-center">

                            <v-btn class="buy-Shop">Shop
                                Now</v-btn>
                        </div>
                    </div>
                </div>

            </v-col>
            <v-row class="fill-height text-center" align="end">
                <v-col class="">
                    <div class=" bg-opacity-75 pa-4 rounded">
                        <h3 class="text-xl font-bold mb-2">Dining</h3>
                    </div>
                </v-col>
                <v-col class="">
                    <div class=" bg-opacity-75 pa-4 rounded">
                        <h3 class="text-xl font-bold mb-2">Living</h3>
                    </div>
                </v-col>
                <v-col class="">
                    <div class=" bg-opacity-75 pa-4 rounded">
                        <h3 class="text-xl font-bold mb-2">Bedroom </h3>
                    </div>
                </v-col>

            </v-row>
        </v-row>
    </v-container>
    </v-main>
</template>

<script setup lang="ts">

const image = [
    {
        src: '/src/assets/images/Mask Group.png',
        title: 'Dining',
    },
    {
        src: '/src/assets/images/Image-living room.png',
        title: 'Living',
    },
    {
        src: '/src/assets/images/Mask Group (1).png',
        title: 'Bedroom',
    }
]

</script>

<style scoped>
.flip-card {
    background: transparent;
    width: 100%;
    height: 521px;
    perspective: 1200px;
    border-radius: 20px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    border-radius: 20px;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 20px;
    overflow: hidden;
}

.flip-card-front {
    z-index: 2;
}

.flip-card-back {
    background: linear-gradient(135deg, #fff7e6 0%, #f3e9d7 100%);
    color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: rotateY(180deg);
    box-shadow: 0 8px 32px 0 rgba(34, 34, 34, 0.18);
}

.buy-Shop {
    background-color: #fff;
    color: #B88E2F;
    font-size: 16px;
    font-weight: bold;
    text-transform: none;
    height: 48px;
    width: 179px;
    /* margin-top: 30px; */
    z-index: -1;
    border-radius: 20px;
}
</style>