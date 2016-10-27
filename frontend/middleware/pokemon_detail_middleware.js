import { fetchPokemon } from '../util/api_util';
import { REQUEST_POKEMON, receivePokemon }
  from '../actions/pokemon_actions';

const PokemonDetailMiddleware = ({ dispatch }) => next => action => {
  switch(action.type) {
    case REQUEST_POKEMON:
      let receivePokemonSuccess = (data) => {
        dispatch(receivePokemon(data));
      };

      let receivePokemonError = () => {console.log('You done goofed');};

      fetchPokemon(action.pokemon, receivePokemonSuccess, receivePokemonError);
      return next(action);
    default:
      return next(action);
  }
};

export default PokemonDetailMiddleware;
