import './App.css'
import { useState } from 'react'
import { PokemonList } from './components/PokemonList/PokemonList'
import { PokemonDetails } from './components/PokemonDetails/PokemonDetails'

function App({pokemons}) {

  const [current,setCurrent] = useState(pokemons[0])
  const [searched, setSearched] = useState("")
  const handleSearch = e => {
    setSearched(e.target.value)
  }

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

  let filtered = []

  if (searched != "") {
    filtered = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searched.toLowerCase()))
  } else {
    filtered = pokemons
  }

  return (
    <div className='app-container'>
      <PokemonList className="poke-list" pokemons={filtered} evolution={evolution} setCurrentId={handleSetCurrentId} />
      <PokemonDetails className="poke-details" pokemon={current} evolution={evolution} />
      <div>
        <input type="text" className='poke-search' onChange={handleSearch}/>
      </div>
    </div>
  )
}

export default App
