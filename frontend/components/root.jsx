import React from 'react';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailsContainer from './pokemon/pokemon_details_container';
import { Router, Route, hashHistory } from 'react-router';
import { requestPokemon, requestAllPokemon } from '../actions/pokemon_actions';


const Root = ({store}) => {
  const requestOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };

  const requestOnShow = (nextState) => {
    store.dispatch(requestPokemon(nextState.params.id));
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component = {PokemonIndexContainer} onEnter={requestOnEnter}>
          <Route path='/pokemon/:id' component = {PokemonDetailsContainer} onEnter={requestOnShow}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
