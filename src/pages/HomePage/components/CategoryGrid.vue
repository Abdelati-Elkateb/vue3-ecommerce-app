<template>
    <main class="tw:py-20">
        <div>
            <h2 class="tw:text-center tw:text-3xl tw:lg:text-[32px] tw:font-bold tw:mt-8">Browse The Range</h2>
            <p class="text-center mb-9 text-lg text-[#8C8C8C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div class="tw:grid tw:md:grid-cols-2 tw:lg:grid-cols-3 tw:gap-6 tw:mb-4">
            <div v-for="n in image" :key="n" class="">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <v-img :lazy-src="image" :src="n" aspect-ratio="1" class="tw:h-[521px] rounded" cover>
                            </v-img>
                        </div>
                        <div class="flip-card-back d-flex flex-column align-center justify-center">

                            <v-btn class="buy-Shop">Shop
                                Now</v-btn>
                        </div>
                    </div>
                    <h1 class="tw:text-center tw:mt-6"> {{ n.title}}</h1>
                </div>

            </div>
        </div>
    </main>
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
    z-index: 100;
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