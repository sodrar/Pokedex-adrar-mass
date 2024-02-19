import './App.css'
import { Pokemon } from './components/Pokemon/Pokemon'
import { PokemonList } from './components/PokemonList/PokemonList'

function App({pokemons}) {

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
