import { fetchAllPokemon } from '../util/api_util';
import { REQUEST_ALL_POKEMON, receiveAllPokemon }
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
    default:
      return next(action);
  }
};

export default PokemonMiddleware;
