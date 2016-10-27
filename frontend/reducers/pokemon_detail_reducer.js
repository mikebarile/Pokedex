import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POKEMON:
      return action.pokemon;
    default:
      return state;
  }
};

export default PokemonDetailReducer;
