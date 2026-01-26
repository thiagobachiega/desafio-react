import { router } from "@/layout"
import deletePokemon from "./delete-pokemon"
import { PokemonCardProps } from "@/components/pokemon-card"

/* DELETE */
export async function handleDelete({ pokemon }: PokemonCardProps) {
        try {

            deletePokemon({ pokemon })

            router.push(`../..`)

        } catch (error) {
            error instanceof Error ? console.log(error.message) : ''
        }
    }