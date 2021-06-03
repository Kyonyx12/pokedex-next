export const getAllPokemons = async (url) => {
  try {
    const data = await fetch(url);
    const dataJson = await data.json();

    let pokemons = await Promise.all(
      dataJson.results.map(async (pokemon) => {
        let currPoke = await fetch(pokemon.url);
        return currPoke.json();
      })
    );
    return pokemons;
  } catch (err) {
    console.log(err);
  }
};

export const getSinglePokemon = async (url) => {
  try {
    const data = await fetch(url);
    const pokemon = await data.json();

    return pokemon;
  } catch (err) {
    console.log(err);
  }
};
