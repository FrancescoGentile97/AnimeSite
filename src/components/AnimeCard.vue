<template>
<div class="card">
    <div class="card-img">
        <img :src="anime.images.jpg.image_url" alt="">
        <h2>Title: {{ anime.title }}</h2>
        <p>Episodes: {{ anime.episodes }}</p>
        <p>Rating: {{ anime.rating }}</p>
    </div>
</div>
</template>


<script>
import {store} from "../store";
export default {
    props: {
        anime:{
            type: Object,
        }
    },
    data(){
        return{
            store,
        }
    }
}
</script>