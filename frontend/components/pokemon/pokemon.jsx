import React from 'react';
import {withRouter} from 'react-router';

const Pokemon = (props) => {
  const handleClick = url => e => props.router.push(url);
  return (<li
    className='pokemon-index-item'
    onClick={handleClick(`/pokemon/${props.poke.id}`)}>
    <h4>{props.poke.name}</h4>
    <img src={props.poke.image_url} />
  </li>
);
};

export default withRouter(Pokemon);
