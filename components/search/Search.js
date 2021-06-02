import React from "react";
import classes from "./Search.module.css";
import { CgPokemon } from "react-icons/cg";

export default function Search() {
  return (
    <form className={classes.form}>
      <input id="search" type="search" className={classes.input} />
      <span>
        <CgPokemon size="3rem" className={classes.searchIcon} />
      </span>
    </form>
  );
}
