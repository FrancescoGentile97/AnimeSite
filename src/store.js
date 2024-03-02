import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    animeSearch: "",
    anime: [],
})


export function animeFetch() {
    axios.get("https://api.jikan.moe/v4/anime", {
        params:{
            query: store.animeSearch,
        }
    })

        .then((resp) => {
            console.log(resp);
            store.anime = resp.data.data;

        })
    }
