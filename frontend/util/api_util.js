
export const fetchAllPokemon = (success, error) => {
  $.ajax({
    url: "api/pokemon",
    method: "GET",
    success,
    error
  });
};

export const fetchPokemon = (id, success, error) => {
  $.ajax({
    url: `api/pokemon/${id}`,
    method: "GET",
    success,
    error
  });
};

export const createPokemon = (pokemon, success, error) => {
  $.ajax({
    url: `api/pokemon`,
    method: "POST",
    data: {pokemon},
    success,
    error
  });
};

export const updatePokemon = (pokemon, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/pokemon/${pokemon.id}`,
    data: { pokemon },
    success,
    error
  });
};

export const destroyPokemon = (pokemon, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/pokemon/${pokemon.id}`,
    success,
    error
  });
};
