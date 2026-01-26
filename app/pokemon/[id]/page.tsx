'use client'

import Form from "@/components/form/form";
import { dataAny } from "@/components/pokemon-grid";
import { PokemonType } from "@/types/pokemon-type";
import { useParams } from "next/navigation";


export default function PokemonPage({ }) {

    const params = useParams();
    let poke: PokemonType = {
        id: 0,
        name: '',
        height: 0,
        weight: 0,
        sprite: ''
    }

    
    dataAny?.map((pokemon: PokemonType) =>
        pokemon.id == Number(params.id) ? (
            poke = {
                id: pokemon.id,
                name: pokemon.name,
                height: pokemon.height,
                weight: pokemon.weight,
                sprite: pokemon.sprite
            }
        ) : ''
    )

    return (
        <div><Form pokemon={{
            id: poke.id,
            name: poke.name,
            height: poke.height,
            weight: poke.weight,
            sprite: poke.sprite
        }}/></div>
    )
}