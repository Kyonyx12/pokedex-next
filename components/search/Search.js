import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CgPokemon } from "react-icons/cg";
import classes from "./Search.module.css";

export default function Search() {
  const [typing, setTyping] = useState(true);
  const [search, setSearch] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const typed = e.target.value;

    setSearch(typed);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTyping(!typing);

    setIsLoading(true);
  };

  useEffect(() => {
    const petition = async (url) => {
      const data = await fetch(url);
      setSearch("");
      if (data.ok) {
        setIsValid(true);
        const response = await data.json();
        router.push(`/pokemon/${response.name}`);
      } else {
        setIsValid(false);
        return;
      }
    };
    if (search === "") {
      return;
    }
    petition(`https://pokeapi.co/api/v2/pokemon/${search}`);
  }, [typing]);

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          id="search"
          type="search"
          className={classes.input}
          value={search}
          onChange={handleChange}
        />
        <span>
          <CgPokemon size="3rem" className={classes.searchIcon} />
        </span>
      </form>
      {!isValid && (
        <div className={classes.notValid}>
          <span>That Pokemon does not exist...</span>
        </div>
      )}
      {isLoading && isValid && (
        <div className={classes.loading}>
          <span>Loading...</span>
        </div>
      )}
    </>
  );
}
