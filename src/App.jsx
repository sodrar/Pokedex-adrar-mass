import './App.css'
import { Pokemon } from './components/Pokemon/Pokemon'

function App({pokemons}) {

  return (
    <div>
      <Pokemon pokemon={pokemons[1]} />
    </div>
  )
}

export default App
