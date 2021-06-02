import { useState } from "react";

import {
  IoArrowForwardCircle,
  IoArrowBackCircle,
  IoFlashOutline,
} from "react-icons/io5";
import { CgPokemon } from "react-icons/cg";
import { GiPokecog } from "react-icons/gi";
import { BsEgg } from "react-icons/bs";

import PokemonDefault from "./PokemonInfo/PokemonDefault";
import PokemonMoves from "./PokemonInfo/PokemonMoves";
import PokemonStats from "./PokemonInfo/PokemonStats";
import Image from "next/image";
import Link from "next/link";
import classes from "./Pokemon.module.css";

function Pokemon({ pokemon }) {
  const [clicked, setClicked] = useState(["default", ""]);
  const { id, name } = pokemon;

  let img;

  if (id >= 10 && id < 100) {
    img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
  } else if (id < 10) {
    img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
  } else {
    img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  }
  const type = pokemon.types[0].type.name.toUpperCase();

  return (
    <>
      <article className={`${classes.singleContainer} ${"article" + type}`}>
        <div className={`type${type}`}>
          <div className={classes.prevNext}>
            <Link href={`/pokemon/${id === 1 ? 640 : id - 1}`}>
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
                  <h1 className={classes.titleButton}>Pokedex</h1>

                  <GiPokecog className={classes.pokedex} color="#FFFFFF" />
                </div>
              </a>
            </Link>
            <Link href={`/pokemon/${id >= 640 ? 1 : id + 1}`}>
              <a>
                <IoArrowForwardCircle
                  color="#FFFFFF99"
                  className={classes.iconBackground}
                />
              </a>
            </Link>
          </div>
          <div className={classes.info}>
            <h1 className={classes.h1}>{name}</h1>
            <h3>ID: #{id}</h3>
            <div className={classes.imgContainer}>
              <Image
                src={img}
                alt={name}
                className={classes.singleImg}
                width="350"
                height="350"
              />
            </div>
          </div>

          <div className={classes.type}>
            <div className="typeBackground">
              <p>{type.toLowerCase()}</p>
            </div>
            {pokemon.types[1] && (
              <div
                className={`typeBackground ${
                  pokemon.types[1].type.name === "poison" ? "poison" : "flying"
                }`}
              >
                <p>{pokemon.types[1].type.name}</p>
              </div>
            )}
          </div>
        </div>

        <div className={classes.secondBackground}>
          <div className={classes.moreInfo}>
            <div className={classes.pokeIconBackground}>
              <div className={`${clicked[0] === "default" && "active"}`}>
                <CgPokemon
                  color="#00000099"
                  size="4rem"
                  onClick={() => setClicked(["default", "active"])}
                />
              </div>
            </div>
            <div className={classes.eggIconBackground}>
              <div className={`${clicked[0] === "stats" && "active"}`}>
                <BsEgg
                  color="#00000099"
                  size="4rem"
                  onClick={() => setClicked(["stats", "active"])}
                />
              </div>
            </div>
            <div className={classes.flashIconBackground}>
              <div className={`${clicked[0] === "moves" && "active"}`}>
                <IoFlashOutline
                  color="#00000099"
                  size="4rem"
                  onClick={() => setClicked(["moves", "active"])}
                />
              </div>
            </div>
          </div>
          <div className={classes.moreInfoBelow}>
            <div
              className={`${clicked[0] === "default" ? "default" : "hidden"}`}
            >
              <PokemonDefault pokemon={pokemon} />
            </div>
            <div className={`${clicked[0] === "stats" ? "stats" : "hidden"}`}>
              <PokemonStats pokemon={pokemon} />
            </div>
            <div className={`${clicked[0] === "moves" ? "moves" : "hidden"}`}>
              <PokemonMoves pokemon={pokemon} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Pokemon;
