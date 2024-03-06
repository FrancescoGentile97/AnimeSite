<template>
    <div>
        <h1>Lista dei preferiti</h1>
        <a href="/"><button class="btn-primary">Home</button></a>
        <div class="row">
            <div v-for="(anime, i) in getFavorites()" :key="anime.mal_id " class="col-md-6">

                <h1>{{ anime.title }}</h1>
                <div class="card-img img-fluid">
                    <img :src="anime.images.jpg.image_url" alt="">
                </div>
            </div>
            
        </div>
    </div>
</template>
  
<script>
import AnimeCard from "./AnimeCard.vue";

export default {
    components: { AnimeCard },
    data() {
        return {};
    },
    methods: {
        getFavorites() {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            return favorites;
        }
    }
};
</script>