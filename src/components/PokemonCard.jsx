function PokemonCard({pokemon}) {
    return <figure><figcaption>{pokemon.name}</figcaption>{pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}</figure>
}

export default PokemonCard
