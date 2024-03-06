<script>

import Home from './components/Home.vue';
import FavoritesAnime from "./components/FavoritesAnime.vue"
import AnimeDetails from "./components/AnimeDetails.vue";

import { store, animeFetch } from "./store";
export default {
  components: { Home,FavoritesAnime ,AnimeDetails },

  data() {
    return {
      store,
    }
  },
  methods: {
    onSearch() {
      animeFetch();
    }
  }
}
</script>

<template>
  <!-- <Home @searchAnime="onSearch()"></Home> -->
  <!-- <FavoritesAnime></FavoritesAnime> -->
  <!-- @searchAnime="onSearch()" -->
  <RouterView @searchAnime="onSearch()"></RouterView>
</template>

<style scoped></style>
