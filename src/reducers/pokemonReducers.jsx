/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */
import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL
} from '../constants/pokemonConstants';

export const listPokemonReducer = (state = { pokemons: [] }, action) => {
  switch (action.type) {
    case POKEMON_LIST_REQUEST:
      return { loading: true, pokemons: [] };

    case POKEMON_LIST_SUCCESS:
      return {
        loading: false,
        pokemons: action.payload
      };

    case POKEMON_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getPokemonReducer = (state = { pokemon: {} }, action) => {
  switch (action.type) {
    case POKEMON_DETAILS_REQUEST:
      return { loading: true, ...state };

    case POKEMON_DETAILS_SUCCESS:
      return { loading: false, pokemon: action.payload };

    case POKEMON_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
