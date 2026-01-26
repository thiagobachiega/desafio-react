'use client'

import { useRef, useState } from "react";
import { PokemonCardProps } from "../pokemon-card";
import { handleEdit } from "@/actions/handle-edit";
import { handleDelete } from "@/actions/handle-delete";
import { handleCreate } from "@/actions/handle-create";
import { handleInput } from "@/actions/handle-input";

export const dbUrl = 'http://localhost:3001/pokemon'


export default function Form({ pokemon }: PokemonCardProps) {

    let mode: string

    /* Form será usado para criar e editar */
    pokemon.name == '' ? mode = 'create' : mode = 'edit'

    const [post, setPost] = useState({
        name: '',
        height: 0,
        weight: 0,
        sprite: ''
    })

    return (
        <div className="flex  max-w-3xl mx-auto items-center justify-center drop-shadow-xl text-white text-xl">
            <div className="flex flex-col border rounded-xl
            bg-gradient-to-br from-blue-400 to-red-400">
                {mode === 'create' ?
                    <div className="flex min-h-full items-center justify-center py-4 font-bold drop-shadow-md">
                        Criar Pokémon
                    </div>
                    :
                    <div className="flex min-h-full items-center justify-center py-4 font-bold drop-shadow-md">
                        Editar Pokémon
                    </div>
                }
                <div className="flex flex-col justify-between">
                    <div className="flex flex-row gap-4 p-4 pt-0 justify-between items-center drop-shadow-md">
                        <div>
                            ID:
                        </div>
                        <div>
                            {pokemon.id}
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 p-4 pt-0 justify-between items-center drop-shadow-md">
                        <div>
                            Nome:
                        </div>
                        <div>
                            <input type="text"
                                className="border rounded-md text-black"
                                name="name"
                                onChange={(e) =>handleInput(e, post, setPost)}
                                placeholder={pokemon.name}
                            >
                            </input>
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 p-4 pt-0 justify-between items-center drop-shadow-md">
                        <div>
                            Altura:
                        </div>
                        <div>
                            {mode === 'edit' ?
                                <input type="text"
                                    className="border rounded-md text-black"
                                    name="height"
                                    onChange={(e) =>handleInput(e, post, setPost)}
                                    placeholder={pokemon.height.toString()}
                                ></input>
                                :
                                <input type="text"
                                    className="border rounded-md text-black"
                                    name="height"
                                    onChange={(e) =>handleInput(e, post, setPost)}
                                ></input>}
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 p-4 pt-0 justify-between items-center drop-shadow-md">
                        <div>
                            Peso:
                        </div>
                        <div>
                            {mode === 'edit' ?
                                <input type="text"
                                    className="border rounded-md text-black"
                                    name="weight"
                                    onChange={(e) =>handleInput(e, post, setPost)}
                                    placeholder={pokemon.weight.toString()}
                                ></input>
                                :
                                <input type="text"
                                    className="border rounded-md text-black"
                                    name="weight"
                                    onChange={(e) =>handleInput(e, post, setPost)}
                                ></input>}
                        </div>
                    </div>
                    <div className="flex flex-row gap-4 p-4 pt-0 justify-between items-center drop-shadow-md">
                        <div>
                            Sprite(URL):
                        </div>
                        <div>
                            <input type="text"
                                className="border rounded-md text-black"
                                name="sprite"
                                onChange={(e) =>handleInput(e, post, setPost)}
                                placeholder={pokemon.sprite}
                            >
                            </input>
                        </div>
                    </div>

                    {mode === 'create' ?
                        <form onSubmit={(e) => handleCreate(e, post)}>
                            <div className="flex flex-row gap-4 p-4 pt-0 justify-between items-center drop-shadow-md">
                                <button type="submit" className="flex bg-blue-500 border-gray-500
                                rounded-md min-h-12 min-w-16 px-4 py-2 justify-center text-center
                                hover:shadow-lg hover:bg-blue-400 hover:scale-110 transition-transform duration-300
                                ">Criar</button>
                            </div>
                        </form>
                        :
                        <form onSubmit={(e) => handleEdit(e, {pokemon}, post)}>
                            <div>
                                <div className="flex flex-row gap-4 p-4 pt-0 justify-between items-center drop-shadow-md">
                                    <button type="submit"
                                        className="flex bg-green-500 border-gray-500 rounded-md min-h-12 min-w-16 px-4 py-2
                                    justify-center text-center
                                    hover:shadow-lg hover:bg-green-400 hover:scale-110 transition-transform duration-300
                                    ">Salvar</button>
                                    <button onClick={() => handleDelete({pokemon})} className="flex bg-red-500 border-red-500 rounded-md 
                                    min-h-12 min-w-16 px-4 py-2 justify-center text-center
                                    hover:shadow-lg hover:bg-red-400 hover:scale-110 transition-transform duration-300
                                    ">Deletar</button>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}