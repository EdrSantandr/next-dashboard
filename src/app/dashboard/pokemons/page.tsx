import Image from "next/image";
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";



export const metadata = {
 title: '151 Pokemons',
 description: '151 Pokemons description',
};

const getPokemons = async (limit = 20, offset = 0):Promise<SimplePokemon[]> => {
 
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then( resp => resp.json() );
    const pokemons = data.results.map( (poke) => ({
      id: poke.url.split('/').at(-2)!,
      name: poke.name,
    }));

    //throw new Error('Function not implemented.');

    return pokemons;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
  
    return (
    <div className="flex flex-col">

      <span className="text-5xl my-2"> Listado de Pokemons <small>Estático</small></span>

      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={ pokemons } />
      </div>
    </div>
  );
}