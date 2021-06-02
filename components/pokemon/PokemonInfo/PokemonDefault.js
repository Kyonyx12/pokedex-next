import classes from "./PokemonSection.module.css";
export default function PokemonDefault({ pokemon }) {
  return (
    <section>
      <div className={classes.defaultContainer}>
        <h1>Abilities: </h1>
        <br />
        <h4> {pokemon.abilities[0].ability.name} </h4>{" "}
        <h4> {pokemon.abilities[1]?.ability.name} </h4>{" "}
        <h4> {pokemon.abilities[2]?.ability.name} </h4>{" "}
      </div>
      <br />
      <div className={classes.defaultContainer}>
        <h1>Base Experience: </h1>
        <br />
        <h4>{pokemon.base_experience}</h4>
      </div>
      <br />
      <div className={classes.defaultContainer}>
        <h1>Height:</h1>
        <br />
        <h4>
          {pokemon.height >= 10
            ? pokemon.height / 10 + " m"
            : pokemon.height / 10 + " m"}
        </h4>
      </div>
    </section>
  );
}
