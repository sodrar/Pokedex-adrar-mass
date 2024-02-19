import { Pokemon } from '../Pokemon/Pokemon'
import './PokemonList.css'

export function PokemonList({pokemons,setCurrentId}) {

    const getCurrentId = (id) => {
        setCurrentId(id)
    }

    const pokemonsElements = []
    pokemons.map((pokemon,i) => pokemonsElements.push(<Pokemon getCurrentId={getCurrentId} className="pokemon" key={i} pokemon={pokemon} />))

    return (
        <div className='pokemon-list'>
            {pokemonsElements}
        </div>
    )
}