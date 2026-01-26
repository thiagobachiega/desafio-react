'use client'

import { PokemonCardProps } from "@/components/pokemon-card";
import axios from "axios";


export default async function deletePokemon({ pokemon }: PokemonCardProps) {
    await axios.delete(`http://localhost:3001/pokemon/${pokemon.id}`);
    alert(`Pokémon ${pokemon.name} deletado!`)
}