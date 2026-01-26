import { dbUrl } from "@/components/form/form";
import { router } from "@/layout";
import axios from "axios";

export function handleCreate(event: { preventDefault: () => void; }, post: any) {
    event.preventDefault()

    if (post.name.length == 0) {
        alert("Preencha o nome")
    }
    else if (post.sprite.slice(-4) != '.png') {
        alert("Sprite inválido. Formato aceito: .png")
    }
    else {
        try {

            axios.post(dbUrl, post)

            alert(`Pokémon ${post.name} criado!`)

            router.push(`../../..`)

        } catch (error) {
            error instanceof Error ? console.log(error.message) : ''
        }
    }
}