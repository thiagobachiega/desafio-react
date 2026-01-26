'use client';

import Image from 'next/image';
import { PokemonType } from '../types/pokemon-type';
import { router } from '@/layout';
import { mutation } from './pokemon-grid';


let pokemonName: string = '';
let pokemonHeight: number = 0.0;
let pokemonWeight: number = 0.0;
let pokemonId: string = '';
let pokemonUrl: string = ''

export interface PokemonCardProps {
    pokemon: PokemonType;
}


export default function PokemonCard( {pokemon}: PokemonCardProps ) {

    pokemonUrl = pokemon.id.toString()

    pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    pokemonHeight = pokemon.height / 10;
    pokemonWeight = pokemon.weight / 10;

    pokemon.id < 10 ? pokemonId = '00' + pokemon.id :
    pokemon.id < 100 ? pokemonId = '0' + pokemon.id :
    pokemonId = pokemon.id.toString();

    return (
        <div className="
                    group
                    flex flex-col items-center justify-center
                    min-w-64 min-h-72 border p-2 rounded-2xl
                    shadow-xl bg-white
                    hover:-translate-y-3 hover:shadow-lg
                    hover:border-orange-300
                    transition-all duration-400
                    ">
            <div className="w-full h-full text-end">
                <div className='opacity-60 font-semibold text-sm'>#{pokemonId}</div>
            </div>
            <div className='flex flex-col w-full items-center'>
                <Image className='absolute translate-y-4 group-hover:-translate-y-0.5 transition-transform opacity-15'
                    src='/pokeball-transp.png'
                    width={120}
                    height={120}
                    alt='pokeball'
                />
                <Image className='relative translate-y-4 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform'
                    src={pokemon.sprite}
                    width={125}
                    height={125}
                    alt={pokemon.name} 
                />
                <div className='text-xl mt-6 group-hover:-translate-y-2 transition-all'><strong>{pokemonName}</strong></div>
            </div>
            <div className='flex opacity-100 scale-0 flex-row justify-center min-h-16 min-w-24 pt-2 pb-2 gap-6
                                group-hover:scale-100 group-hover:opacity-100 transition-all duration-100'>
                    <button onClick={() => router.push(`/pokemon/${pokemon.id}`)} 
                        className='flex rounded-md bg-blue-300
                        items-center justify-center px-4 py-2 font-semibold
                        hover:shadow-lg
                        hover:bg-blue-200
                        hover:scale-110
                        '
                        >Editar</button>
                    <button onClick={() => mutation.mutate({pokemon})} 
                        className='flex rounded-md bg-red-300
                        items-center justify-center px-4 py-2 font-semibold
                        hover:shadow-lg
                        hover:bg-red-200
                        hover:scale-110
                        '
                        >Excluir</button>
                </div>
            <div className='flex flex-row text-center'>
                <div className='ml-2 pb-0 text-sm'>{pokemonHeight}m altura</div>
                <div className='ml-2 pb-0 text-sm'>{pokemonWeight}kg peso</div>
            </div>
        </div>
    )

}
