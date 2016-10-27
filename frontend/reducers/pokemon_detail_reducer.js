import { RECEIVE_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';
import values from 'lodash/values';

const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_POKEMON:
    case RECEIVE_NEW_POKEMON:
      return values(action.pokemon)[0];
    default:
      return state;
  }
};

export default PokemonDetailReducer;
