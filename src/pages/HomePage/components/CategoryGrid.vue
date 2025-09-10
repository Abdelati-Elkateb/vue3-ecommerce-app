<template>
    <v-container class="w-100 mt-12 mb-12">
        <div>
            <h2 class="text-center my-6 text-3xl font-bold">Browse The Range</h2>
            <p class="text-center mb-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                luctus nec ullamcorper mattis.</p>
        </div>
        <v-row>
            <v-col v-for="n in 3" :key="n" class="d-flex child-flex" cols="4">
                <v-img :lazy-src="image" :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`" aspect-ratio="1"
                    class="bg-grey-lighten-2 h-[521px] rounded" cover>
                </v-img>

            </v-col>
            <v-row class="fill-height text-center" align="end">
                <v-col class="">
                    <div class=" bg-opacity-75 pa-4 rounded">
                        <h3 class="text-xl font-bold mb-2">Bedroom {{ n }}</h3>
                        <!-- <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <v-btn class="text-[#B88E2F] border-[#B88E2F]" variant="outlined" rounded>Shop Now</v-btn> -->
                    </div>
                </v-col>
                <v-col class="">
                    <div class=" bg-opacity-75 pa-4 rounded">
                        <h3 class="text-xl font-bold mb-2">Dining {{ n }}</h3>
                        <!-- <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <v-btn class="text-[#B88E2F] border-[#B88E2F]" variant="outlined" rounded>Shop Now</v-btn> -->
                    </div>
                </v-col>
                <v-col class="">
                    <div class=" bg-opacity-75 pa-4 rounded">
                        <h3 class="text-xl font-bold mb-2">Living {{ n }}</h3>
                        <!-- <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <v-btn class="text-[#B88E2F] border-[#B88E2F]" variant="outlined" rounded>Shop Now</v-btn> -->
                    </div>
                </v-col>
                
            </v-row>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

</script>