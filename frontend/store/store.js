import { createStore } from 'redux';
import RootReducer from '../reducers/root_reducer';
import MasterMiddleware from '../middleware/master_middleware';

const preloadedState = {
  pokemon: {},
  pokemonDetail: {
    moves: [],
    items: []
  }
};

const configureStore = () => (
  createStore(
    RootReducer,
    preloadedState,
    MasterMiddleware
  )
);

export default configureStore;
