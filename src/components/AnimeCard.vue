<!-- <template>
    <div class="col-md-6">
        <div class="card flex-wrap">
            <div class="card-img img-fluid">
                <router-link :to="'/details/' + anime.mal_id">
                    <img :src="anime.images.jpg.image_url" alt="">
                </router-link>
            </div>
            <div class="card-body">
                <h2> {{ anime.title }}</h2> -->
                <!-- <p :title="anime.synopsis" v-if="anime.synopsis">
                    {{ anime.synopsis.slice(0, 100) }}
                </p> -->
                <!-- <p>Episodes: {{ anime.episodes }}</p>
                <p>Rating: {{ anime.rating }}</p>
                <button class="btn-primary" @click="addToFavorites(anime)">{{ favoriteButtonText }}</button>
            </div>
        </div>
    </div>
</template> -->

<template>
    <div class="row">
        <div v-for="(anime, i) in store.anime" :key="i + anime.title" class="col-md-6">
            <div class="card flex-wrap">
                <div class="card-img img-fluid">
                    <router-link :to="'/details/' + anime.mal_id">
                        <img :src="anime.images.jpg.image_url" alt="">
                    </router-link>
                </div>
                <div class="card-body">
                    <h2>{{ anime.title }}</h2>
                    <p>Episodes: {{ anime.episodes }}</p>
                    <p>Rating: {{ anime.rating }}</p>
                    <button class="btn-primary" @click="addToFavorites(anime)">{{ favoriteButtonText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from "../store";
// import {useRouter} from "vue-router";
// const router = useRouter();
export default {

    props: {
        anime: {
            type: Object,
        },
        favorites: {
            type: Object,
        }

    },
    data() {
        return {
            store,
            isFavorite: false,

        }
    },
    computed: {
        favoriteButtonText() {
            return this.isFavorite ? "rimuovi dai preferiti" : "aggiungi ai preferiti"
        }
    },
    methods: {
        addToFavorites(anime) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const index = favorites.findIndex(a => a.mal_id === anime.mal_id);

            if (index !== -1) {
                favorites.splice(index, 1);
                this.isFavorite = false;
            } else {
                favorites.push(anime);
                this.isFavorite = true;
            }

            localStorage.setItem('favorites', JSON.stringify(favorites));
        },
        // navigateTo(animeId){
        //     router.push({name:"details" , params:{id:animeId}})
        // }


    }

}


</script>