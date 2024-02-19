import './App.css'
import { useState } from 'react'
import { PokemonList } from './components/PokemonList/PokemonList'
import { PokemonDetails } from './components/PokemonDetails/PokemonDetails'

function App({pokemons}) {

  const [currentId,setCurrentId] = useState(0)
  const [current,setCurrent] = useState(pokemons[currentId])

  let evoImg = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dnone&psig=AOvVaw07UdkZ894V4LAWT7lWH6cU&ust=1708460797246000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDbu8ieuIQDFQAAAAAdAAAAABAI"
  let evolution = {
    id: 1,
    name: "",
    image: evoImg
  }

  if (current.apiEvolutions.length > 0) {
    evoImg = pokemons.find(pokemon => pokemon.id == current.apiEvolutions[0].pokedexId).image
    evolution = {
      id: current.apiEvolutions[0].pokedexId,
      name: current.apiEvolutions[0].name,
      image: evoImg
    }
  }
  

  const handleSetCurrentId = (id) => {
    setCurrent(pokemons[id])
  }

  return (
    <div className='app-container'>
      <PokemonList className="poke-list" pokemons={pokemons} evolution={evolution} setCurrentId={handleSetCurrentId} />
      <PokemonDetails className="poke-details" pokemon={current} evolution={evolution} />
    </div>
  )
}

export default App
