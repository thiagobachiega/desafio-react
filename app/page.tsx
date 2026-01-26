'use client'

import Image from "next/image";
import PokemonGrid, { lastPokemon, pokemonCount } from "./components/pokemon-grid";
import { useState } from "react";
import { router } from "./layout";



export default function Page() {

    const [search, setSearch] = useState('');
    let searchLower = search.toLowerCase()

    return (
        <main className="flex min-h-screen flex-col items-center justify-start mx-24 p-12 pt-2">
            <div className="flex w-screen flex-col justify-center items-center gap-6 pb-4 md:pb-8">
                <div className="flex flex-row border rounded-xl bg-white">
                    <div className="flex p-4">
                        <Image
                            src= "/search-663.svg"
                            width= {18}
                            height= {18}
                            alt= "Search icon"
                        />
                    </div>
                    <input type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar pokémon..."
                        className="flex md:w-screen max-h-12 p-2 md:max-w-[448px]
                        border-opacity-0 border-gray-300 rounded-r-xl bg-white
                        focus:outline-red-400 focus:ring-1 focus:ring-orange-400
                        focus:border-orange-400
                        transition-all duration-300"
                    >
                    </input>
                </div>
                <div className="flex flex-col">
                    <button onClick={() => router.push(`/pokemon/create/${lastPokemon + 1}`)}
                        className='flex rounded-md border bg-green-500 text-white
                        items-center justify-center px-4 py-2 font-semibold
                        hover:shadow-lg
                        hover:bg-green-400
                        hover:text-slate-50
                        hover:scale-110
                        transition-transform duration-300
                        '>Criar Novo Pokémon</button>
                </div>
            </div>
            <PokemonGrid search={searchLower} />
        </main>
    );


}