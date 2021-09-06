import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pokemon, { PokemonType } from "./Pokemon";

const RepositoryList = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [nextPage, setNextPage] = useState(
    "https://pokeapi.co/api/v2/pokemon-species"
  );
  useEffect(() => {
    catchPokemon();
  }, []);

  const handleNextPage = () => {
    catchPokemon();
  };

  const catchPokemon = () => {
    fetch(nextPage)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setNextPage(data.next);
      });
  };
  return (
    <section>
      <h1>Lista de Pokemons</h1>
      <button onClick={handleNextPage}>proximo</button>
      <ul>
        {pokemons.map((poke) => (
          <Pokemon key={poke.name} pokemon={poke} />
        ))}
      </ul>
    </section>
  );
};
export default RepositoryList;
