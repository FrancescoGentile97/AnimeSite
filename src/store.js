import { reactive } from "vue";
import axios from "axios";
import { ref } from "vue";

export const store = reactive({
    animeSearch: "",
    // query : ref(""),
    anime: [],
    favorites: [],
    topAnime: [],
})

// funzione per fetchare la lista degli anime
export function animeFetch() {
    axios.get(`https://api.jikan.moe/v4/anime?q=${store.animeSearch}`, {
        // params: {
        //     q: store.animeSearch,
        // }
    })

        .then((resp) => {
            console.log(resp);
            store.anime = resp.data.data;
            // animeSearch.value = resp.results
        })
}

export function topAnimeFetch() {
    axios.get("https://api.jikan.moe/v4/top/anime", {
        params: {
            filter: "bypopularity",
            limit: 10,
        }
    })

        // `https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=10`

        .then((resp) => {
            console.log(resp);
            store.topAnime = resp.data.data;
            // animeSearch.value = resp.results
        })
}

// funzione per addare gli anime tra i preferiti

// const addAnime = anime => {
//     animeSearch.value = []
//     q.value = ""
//     anime.value.push({
//         id: anime.mal_id,
//         title: anime.title,
//         image: anime.image.jpg.image_url,
//         total_episodes: anime.episodes
//     })
//     localStorage.setItem("anime", JSON.stringify(anime.value))

//     onMounted(() => {
//         anime.value = JSON.parse(localStorage.getItem("anime")) || []
//     })




