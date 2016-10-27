import React from 'react';
import Pokemon from './pokemon';

const PokemonIndex = (props) => {
  return(
    <ul>
    {props.children}
    {props.pokemon.map(poke => (
      <Pokemon
        key={poke.id}
        poke={poke}
        />
    ))}
  </ul>
);};

export default PokemonIndex;
