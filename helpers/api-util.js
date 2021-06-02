export const getAllPokemons = async (url) => {
  const data = await fetch(url);
  const dataJson = await data.json();

  let pokemons = await Promise.all(
    dataJson.results.map(async (pokemon) => {
      let currPoke = await fetch(pokemon.url);
      return currPoke.json();
    })
  );
  return pokemons;
};

export const getSinglePokemon = async (url) => {
  const data = await fetch(url);
  const pokemon = await data.json();

  return pokemon;
};
