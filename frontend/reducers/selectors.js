import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemon = (state) => {
  return state.pokemonDetail;
};

export const selectItems = (state) => {
  return state.pokemonDetail.items;
};
