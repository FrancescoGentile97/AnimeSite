<template>
    <h1>TOP ANIME</h1>
        <div class="row">
            <div v-for="(anime, i) in store.topAnime" :key="anime.mal_id" class=" col-md-6">
                <div class="carousel-item active ">
                    <img class="img-fluid w-50 h-50" :src="anime.images.jpg.image_url" alt="First slide">
                </div>

            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
</template>

<script>
import { store } from "../store";
export default {
    components: {},
    data() {
        return {
            store,
        }
    }
}
</script>