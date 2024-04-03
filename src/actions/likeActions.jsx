/* eslint-disable no-underscore-dangle */
import { LIKE, DISLIKE } from '../constants/likeConstants';

export const likePokemonAction = (id, isLike) => async (dispatch, getState) => {
  //   const { data } = await axios.get(`/api/products/${id}`);
  // const data = pokemon;
  // console.log(id, isLike);

  dispatch({
    type: LIKE,
    payload: {
      pokemon: id,
      isLike
    }
  });
  localStorage.setItem(
    'likedPokemon',
    JSON.stringify(getState().liked.likedPokemon)
  );
};

// export const showLikeAction = () => (dispatch) => {
//   dispatch({
//     type: LIKE
//   });
// };

export const dislikePokemonAction = (name) => (dispatch, getState) => {
  dispatch({
    type: DISLIKE,
    payload: name
  });

  localStorage.setItem(
    'likedPokemon',
    JSON.stringify(getState().liked.likedPokemon)
  );
};
