import { dbUrl } from "@/components/form/form";
import { PokemonCardProps } from "@/components/pokemon-card";
import { router } from "@/layout";
import axios from "axios";

/* UPDATE */
export function handleEdit(event: { preventDefault: () => void; }, { pokemon }: PokemonCardProps, post: any) {
    event.preventDefault()
    try {

        if (post['name'].length == 0) {
            post['name'] = pokemon['name']
        }
        if (post['height'] == 0) {
            post['height'] = pokemon['height']
        }
        if (post['weight'] == 0) {
            post['weight'] = pokemon['weight']
        }
        if (post['sprite'].length == 0) {
            post['sprite'] = pokemon['sprite']
        }
        else if (post.sprite.slice(-4) != '.png') {
            alert("Sprite inválido. Formato aceito: .png")
            return
        }

        axios.put(`${dbUrl}/${pokemon.id}`, {
            name: post.name,
            height: post.height,
            weight: post.weight,
            sprite: post.sprite
        })

        alert("Pokémon editado!")

        router.push(`../../..`)

    } catch (error) {
        error instanceof Error ? console.log(error.message) : ''
    }

}