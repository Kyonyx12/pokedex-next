import classes from "./PokemonSection.module.css";
export default function PokemonStats({ pokemon }) {
  return (
    <section>
      <h1 className={classes.statsTitle}>Stats</h1>
      <div className={classes.statsContainer}>
        {pokemon.stats.map((stat, ind) => {
          return (
            <div key={ind}>
              <div className={classes.stat}>
                <h1>
                  {stat.stat.name.toUpperCase()}: <span>{stat.base_stat}</span>
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
