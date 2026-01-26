'use client';

import { useMutation, UseMutationResult, useQuery, useQueryClient } from '@tanstack/react-query';
import PokemonCard, { PokemonCardProps } from './pokemon-card';
import { fetchPokemon } from '@/actions/get-pokemons';
import { PokemonType } from '@/types/pokemon-type';
import deletePokemon from '@/actions/delete-pokemon';


export let lastPokemon: number = 0
export let dataAny: any  /* Objeto global com lista de pokémons */
export let pokemonCount: number = 0
export let mutation: UseMutationResult<void, Error, PokemonCardProps, unknown>
let arrayLength: number

let url: any = 'http://localhost:3001/pokemon'

export default function PokemonGrid({ search }: any) {

    const queryClient = useQueryClient();

    /* Mutation invalida a query anterior, forçando um refetch */
    mutation = useMutation({
        mutationFn: deletePokemon,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pokemon'] });
        }
    });

    const { data, isError, isLoading } = useQuery({
        queryKey: ['pokemon', url],
        queryFn: () => fetchPokemon(url),
    });

    if (isError) {
        console.log("Error")
    }
    if (isLoading) {
        console.log("Loading")
    }
    if (!data) {
        return <div>data error</div>
    }

    dataAny = data

    let searchAny: any = search

    let arrayPokemon = Array()

    return (
        <div>
            <span className="flex justify-center pb-4 md:pb-8 font-light">Mostrando {arrayLength} pokémon</span>
            <div className="flex flex-wrap justify-center gap-6">

                {dataAny?.filter((pokemon: PokemonType) => {
                    /* Vazio? Retorna todos pokémon; não-vazio retorna somente pokémon relevantes */
                    return searchAny === '' ?
                        (arrayLength = lastPokemon, lastPokemon = dataAny[dataAny.length - 1].id)
                        : pokemon.name.toLowerCase().includes(searchAny) ? pokemon
                        : arrayLength = 0
                }
                ).map((pokemon: PokemonType) => 
                    <div key={pokemon.id}>
                        <span className='hidden'>{arrayLength = arrayPokemon.push(pokemon)}</span>
                        <PokemonCard pokemon={pokemon} />
                    </div>
                )
                }
            </div>
        </div>
    );
}