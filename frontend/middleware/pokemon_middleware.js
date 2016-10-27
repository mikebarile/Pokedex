import { fetchAllPokemon, createPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon, CREATE_POKEMON, receiveNewPokemon }
  from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      let receiveAllPokemonSuccess = (data) => {
        dispatch(receiveAllPokemon(data));
      };

      let receiveAllPokemonError = () => {console.log('You done goofed');};

      fetchAllPokemon(receiveAllPokemonSuccess, receiveAllPokemonError);
      return next(action);

    case CREATE_POKEMON:
        let createPokemonSuccess = (data) => {
          dispatch(receiveNewPokemon(data));
        };

        let error = () => {console.log('You done goofed');};

        createPokemon(action.formParams, createPokemonSuccess,error);
        return next(action);

    default:
      return next(action);
  }
};

export default PokemonMiddleware;
