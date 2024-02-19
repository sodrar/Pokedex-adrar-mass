import { Pokemon } from '../Pokemon/Pokemon'
import './PokemonDetails.css'

export function PokemonDetails({ pokemon, evolution }) {
    console.log(evolution)
    return (
        <div className="details-container">
            <h3>n°{pokemon.id}</h3>
            <img className='img-poke-details' src={pokemon.image} alt="image detail du pokemon" />
            <h1>{pokemon.name}</h1>
            <h2>Types</h2>
            <div className='poke-details-type-container'>
                <img src={pokemon.apiTypes[0].image} className='img-poke-details-type' alt="type 1 du pokemon" />
                {pokemon.apiTypes.length > 1 ? <img src={pokemon.apiTypes[1].image} className='img-poke-details-type'alt="type 1 du pokemon" /> : null }
            </div>
            <h3>Evolution</h3>
            <Pokemon className="poke-details-evo" pokemon={evolution} />
        </div>
    )
}