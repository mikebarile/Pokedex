import React from 'react';
import { withRouter } from 'react-router';

const PokemonDetails = ({pokemon}) => {
  return(
    <ul>
      <li><img src={pokemon.image_url}/></li>
      <li>Name: {pokemon.name}</li><br/>
      <li>Attack: {pokemon.attack}</li><br/>
      <li>Defense: {pokemon.defense}</li><br/>
      <li>Type: {pokemon.poke_type}</li><br/>
      <li>Name: {pokemon.name}</li><br/>
      <li>Moves:
        <ul>
          {pokemon.moves.map(move => <li>{move}</li>)}
        </ul>
      </li>
    ))}
  </ul>
);};

export default withRouter(PokemonDetails);
