import React from 'react';
import { withRouter } from 'react-router';

const PokemonDetails = ({params, pokemonDetail, children, router}) => {
  const handleClick = url => e => router.push(url);
  return(
    <div>
      <img src={pokemonDetail.image_url}/>
      <ul>
        <li>Name: {pokemonDetail.name}</li><br/>
        <li>Attack: {pokemonDetail.attack}</li><br/>
        <li>Defense: {pokemonDetail.defense}</li><br/>
        <li>Type: {pokemonDetail.poke_type}</li><br/>
        <li>Moves:
          <ul>
            {pokemonDetail.moves.map((move, idx) => <li key={idx}>{move}</li>)}
          </ul>
        </li>
        <li>Items:
            <br/>
            {pokemonDetail.items.map((item, idx) => (
              <img
                key={item.id}
                src={item.image_url}
                onClick={handleClick(`pokemon/${params.id}/item/${item.id}`)} />)
            )}
          {children}
        </li>
    </ul>
  </div>
);};

export default withRouter(PokemonDetails);
