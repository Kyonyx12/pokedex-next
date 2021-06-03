import Link from "next/link";

import Pokecard from "../components/pokecard/Pokecard";
import { getAllPokemons } from "../helpers/api-util";
import classes from "../styles/Home.module.css";

import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

import Search from "../components/search/Search";

export default function Home({ pokemons }) {
  return (
    <>
      <div className="App">
        <div className={classes.prevNext}>
          <Link href={`/`}>
            <a>
              <IoArrowBackCircle
                color="#FFFFFF99"
                className={classes.iconBackground}
              />
            </a>
          </Link>
          <Link href="/" className={classes.titleTextLink}>
            <a className={classes.a}>
              <div className={classes.title}>
                <h1 className={classes.titleText}>Pokedex</h1>
              </div>
            </a>
          </Link>
          <Link href={`/2`}>
            <a>
              <IoArrowForwardCircle
                color="#FFFFFF99"
                className={classes.iconBackground}
              />
            </a>
          </Link>
        </div>
        <Search />
        <div className="container">
          {pokemons.map((pokemon) => (
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name.toUpperCase()}
              src={pokemon.sprites.front_default}
              type={pokemon.types[0].type.name.toUpperCase()}
              base_experience={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const pokemons = await getAllPokemons("https://pokeapi.co/api/v2/pokemon/");

  return {
    props: {
      pokemons,
    },
  };
};
