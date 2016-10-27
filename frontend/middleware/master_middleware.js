import { applyMiddleware } from 'redux';
import PokemonMiddleware from './pokemon_middleware';
import PokemonDetailMiddleware from './pokemon_detail_middleware';

const MasterMiddleware = applyMiddleware(PokemonMiddleware,
  PokemonDetailMiddleware);
export default MasterMiddleware;
