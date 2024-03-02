<script>

import Home from './components/Home.vue';
import { store, animeFetch } from "./store";
export default {
  components: { Home },

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
  <Home @searchAnime="onSearch"></Home>
</template>

<style scoped></style>
