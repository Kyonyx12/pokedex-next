import Link from "next/link";
import Image from "next/image";
import classes from "./Pokecard.module.css";

function Pokecard(props) {
  const name = props.name.toLowerCase();

  return (
    <div className={classes.pokecard}>
      <h2>{name}</h2>
      <Link href={`/pokemon/${props.id}`}>
        <a>
          <Image
            className="Pokecard-img"
            src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`}
            alt={name}
            width="128"
            height="128"
          />
        </a>
      </Link>
    </div>
  );
}

export default Pokecard;
