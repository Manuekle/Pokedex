import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  listPokemonReducer,
  getPokemonReducer
} from './reducers/pokemonReducers';

import { likedPokemonReducer } from './reducers/likeReducers';

const reducer = combineReducers({
  pokemonList: listPokemonReducer,
  pokemonDetail: getPokemonReducer,
  liked: likedPokemonReducer
});

const likedPokemonFromStorage = localStorage.getItem('likedPokemon')
  ? JSON.parse(localStorage.getItem('likedPokemon'))
  : [];

const initialState = {
  liked: { likedPokemon: likedPokemonFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
