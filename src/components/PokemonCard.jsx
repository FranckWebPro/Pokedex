const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];

const pokemon = pokemonList[1];

function PokemonCard() {
    return <figure><figcaption>{pokemon.name}</figcaption>{pokemon.imgSrc !== undefined ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}</figure>
}

export default PokemonCard
