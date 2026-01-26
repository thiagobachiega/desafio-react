import axios from "axios";

export async function fetchPokemonDetails(url: string) {
    const res = await axios.get(url);
    return res.data;
}