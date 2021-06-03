import Pokemon from "../../components/pokemon/Pokemon";
import { getAllPokemons, getSinglePokemon } from "../../helpers/api-util";

export default function SinglePokemon({ pokemon }) {
  return <Pokemon pokemon={pokemon} />;
}

export const getStaticProps = async (context) => {
  const pokemonId = context.params.id;

  const pokemon = await getSinglePokemon(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );

  return {
    props: {
      pokemon,
    },
  };
};

export async function getStaticPaths() {
  const pokemons = await getAllPokemons("https://pokeapi.co/api/v2/pokemon/");

  const paths = pokemons.map((pokemon) => {
    const id = pokemon.id.toString();
    return {
      params: {
        id,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}
