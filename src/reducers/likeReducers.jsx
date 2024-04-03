/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-case-declarations */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import { LIKE, DISLIKE } from '../constants/likeConstants';

export const likedPokemonReducer = (state = { likedPokemon: [] }, action) => {
  switch (action.type) {
    case LIKE:
      const item = action.payload;
      const existItem = state.likedPokemon.find(
        (x) => x.pokemon === item.pokemon
      );

      if (existItem) {
        return {
          ...state,
          likedPokemon: state.likedPokemon.map((x) =>
            x.pokemon === existItem.pokemon ? item : x
          )
        };
      }
      return {
        ...state,
        likedPokemon: [...state.likedPokemon, item]
      };

    case DISLIKE:
      return {
        ...state,
        likedPokemon: state.likedPokemon.filter(
          (x) => x.pokemon !== action.payload
        )
      };

    default:
      return state;
  }
};
