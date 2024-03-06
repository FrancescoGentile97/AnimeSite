import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "../AnimeSite/src/components/Home.vue"
import FavoritesAnime from "./src/components/FavoritesAnime.vue"
import AnimeDetails from "./src/components/AnimeDetails.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/details/:id",
            name: "details",
            component: AnimeDetails
        },
        {
            path: "/favorites",
            name: "favorites",
            component: FavoritesAnime
        }
    ]
})

export {router};