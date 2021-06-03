import classes from "./PokemonSection.module.css";

export default function PokemonMoves({ pokemon }) {
  return (
    <section className={classes.moves}>
      <h1 className={classes.movesTitle}>Moves</h1>
      {pokemon.moves
        .map((move, ind) => (
          <div key={ind} className={classes.move}>
            <h1>{move.move.name}</h1>
          </div>
        ))
        .slice(0, 6)}
    </section>
  );
}
