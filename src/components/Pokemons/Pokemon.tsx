import React from "react";

export interface PokemonType {
  name: string;
  url: string;
}

interface PokemonTypeProps {
  pokemon: PokemonType;
}

const Pokemon = (props: PokemonTypeProps) => (
  <li>
    <a href={props.pokemon.url} target="_blank" rel="noreferrer">
      <strong>Nome: {props.pokemon.name}</strong>
    </a>
  </li>
);

export default Pokemon;
