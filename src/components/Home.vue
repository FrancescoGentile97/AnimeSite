<template>
  <div class="container">
    <h1 class="text-danger">Anime Search</h1>
    <div class="row">
      <div class="col d-flex">
        <input type="text" v-model="animeSearch">
        <button @click="onSearch">Search</button>
      </div>
      <div v-for="(anime,i) in store.anime" :key="i">
        <AnimeCard :anime="anime"></AnimeCard>
      </div>
    </div>

  </div>
</template>

<script>
import { store } from "../store";
import AnimeCard from "./AnimeCard.vue";
export default {
  components : {AnimeCard},
  data() {
    return {
      store,
      animeSearch: "",
    }
  },

  // fare l'emit per passare la funzione all'app vue e richiamarla dal suo template con la "@"
  emits: ["searchAnime"],
  methods: {
    onSearch() {
      this.store.animeSearch = this.animeSearch;
      this.$emit("searchAnime")
    }
  }
}


</script>

<style></style>
