import './App.css'
import { useState } from 'react'
import { PokemonList } from './components/PokemonList/PokemonList'
import { PokemonDetails } from './components/PokemonDetails/PokemonDetails'

function App({pokemons}) {

  const [current,setCurrent] = useState(pokemons[10])

  const evoImg = pokemons.find(pokemon => pokemon.id == current.apiEvolutions[0].pokedexId).image
  const evolution = {
    id: current.apiEvolutions[0].pokedexId,
    name: current.apiEvolutions[0].name,
    image: evoImg
  }

  console.log(evolution)

  return (
    <div className='app-container'>
      <PokemonList className="poke-list" pokemons={pokemons} evolution={evolution} />
      <PokemonDetails className="poke-details" pokemon={current} evolution={evolution} />
    </div>
  )
}

export default App
