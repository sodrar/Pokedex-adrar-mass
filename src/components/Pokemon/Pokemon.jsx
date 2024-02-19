import './Pokemon.css'

export function Pokemon({pokemon, getCurrentId}) {

    const handleClick = () => {
        getCurrentId(pokemon.id - 1)
    }

    return (
        <div onClick={handleClick} className='pokemon'>
            <p className='pokemon-id'>{pokemon.id}</p>
            <p className='pokemon-name'>{pokemon.name}</p>
            <img className='pokemon-image' src={pokemon.image} alt="pokemon image" />
        </div>
    )
}