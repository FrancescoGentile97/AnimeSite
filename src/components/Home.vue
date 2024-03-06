<template>
  <div class="container">
    <h1 class="text-danger">Anime Search</h1>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/favorites">Favorites</a>
          </li>
        </ul>
        <div class="row">
          <div class="col d-flex">
            <input type="text" placeholder="Cerca un anime...." class="form-control" v-model="animeSearch">
            <button @click="onSearch" @searchAnime="onSearch()" type="submit">Search</button>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- <a href="/favorites"><button class="btn-secondary">FAVORITES</button></a>
    <a href="/details"> <button class="btn-primary">DETTAGLI</button> </a> -->
  <div class="container">
    <div class="row">
      <div v-if="animeSearch.length > 0">
        <div v-for="(anime, i) in store.anime" :key="i + anime.title">
          <AnimeCard :anime="anime" />
        </div>
      </div>
      <div v-else="">
        <div class="card  d-flex">
          <AnimeSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store, topAnimeFetch } from "../store";
import AnimeCard from "./AnimeCard.vue";
import FavoritesAnime from "./FavoritesAnime.vue"
import AnimeDetails from "./AnimeDetails.vue";
import AnimeSlider from "./AnimeSlider.vue";
export default {
  components: { AnimeCard, FavoritesAnime, AnimeDetails, AnimeSlider },
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
  },
  created() {
    topAnimeFetch()
  }
}


</script>

<style></style>
