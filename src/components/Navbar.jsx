function Navbar({ setPokemonIndex, pokemonList }) {

  const handleClick = (index, pokemon) => {
    setPokemonIndex(index)
    if(pokemon.name === "pikachu") {
      alert("pika pikachu !!!")
    }
  }

  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button onClick={() => handleClick(index, pokemon)} key={pokemon.name}>{pokemon.name}</button>
      )
      )}
    </nav>
  )
}

export default Navbar;