import Link from "next/link";
import Pokecard from "../components/pokecard/Pokecard";
import Search from "../components/search/Search";

import { getAllPokemons } from "../helpers/api-util";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

import classes from "../styles/Home.module.css";

export default function Page({ pokemons, page }) {
  let pag = Number(page);
  let prevPage;
  let nextPage = pag + 1;

  if (pag === 2) {
    prevPage = "";
  } else {
    prevPage = pag - 1;
  }
  if (pag === 31) {
    nextPage = "";
  }
  return (
    <div className="App">
      <div className={classes.prevNext}>
        <Link href={`/${prevPage.toString()}`}>
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
        <Link href={`/${nextPage.toString()}`}>
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
  );
}

export const getServerSideProps = async (context) => {
  const page = context.params.page;

  if (context.params.page === "2") {
    const pokemons = await getAllPokemons(
      "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
    );
    return { props: { pokemons, page } };
  } else {
    const id = context.params.page * 2 + "0";
    const pokemons = await getAllPokemons(
      `https://pokeapi.co/api/v2/pokemon/?offset=${id}&limit=20`
    );
    return { props: { pokemons, page } };
  }
};
