import { PokemonType } from "@/types/pokemon-type";
import axios from 'axios'


export const fetchPokemon = async (limit: string) => {
    const res = await axios.get<PokemonType>(`http://localhost:3001/pokemon`);
    return res.data;
}