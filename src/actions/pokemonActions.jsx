/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAILS_REQUEST,
  POKEMON_DETAILS_SUCCESS,
  POKEMON_DETAILS_FAIL
} from '../constants/pokemonConstants';

// const URL = 'https://pokeapi.co/api/v2/pokemon?offset=';

export const listPokemon = (offset) => async (dispatch) => {
  try {
    dispatch({ type: POKEMON_LIST_REQUEST });

    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`
    );

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: data.results
    });
  } catch (error) {
    dispatch({
      type: POKEMON_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

export const getPokemon = (url) => async (dispatch) => {
  try {
    dispatch({ type: POKEMON_DETAILS_REQUEST });

    const { data } = await axios.get(`${url}`);

    dispatch({
      type: POKEMON_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: POKEMON_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};
