import { Pokemon } from '../Pokemon/Pokemon'
import './PokemonList.css'

export function PokemonList({pokemons}) {
    
    const pokemonsElements = []
    pokemons.map((pokemon,i) => pokemonsElements.push(<Pokemon className="pokemon" key={i} pokemon={pokemon} />))

    return (
        <div className='pokemon-list'>
            {pokemonsElements}
        </div>
    )
}