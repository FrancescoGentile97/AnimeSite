<template>
    <h1>Dettagli anime</h1>
    <a href="/"><button class="btn-primary">Home</button></a>
    <div v-if="animeDetails">
       <AnimeCard :anime="animeDetails"></AnimeCard>
    </div>
    <div v-else="">
        <h1>Loading....</h1>
    </div>
</template>

<script>

import { store } from "../store";
import AnimeCard from "./AnimeCard.vue";
import axios from "axios";
export default {
    data() {
        return {
            animeDetails: null,
            loading: true,
        };
    },
    // anime: "",
    // props: {
    //     anime: {
    //         type: Object,
    //     }
    // },
    created() {
        this.getDetails();
    },
    methods: {
        getDetails() {
            const id = this.$route.params.id;
            // console.log(id)
            axios.get(`https://api.jikan.moe/v4/anime/${id}`)
                .then((resp) => {
                // console.log(resp);
                this.animeDetails = resp.data.data,
                    this.loading = false;
            })
                .catch((err) => {
                console.log(err);
                this.loading = false;
            });
        },
        components: { AnimeCard }
    },
    components: { AnimeCard }
}
</script>