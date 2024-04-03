import React, { useState, useEffect } from 'react';
import { Heart } from '@phosphor-icons/react';
import { useDispatch, useSelector } from 'react-redux';
import { likePokemonAction } from '../actions/likeActions';

function like({ data }) {
  const [isLiked, setLike] = useState(false);
  const dispatch = useDispatch();

  const liked = useSelector((state) => state.liked);
  const { likedPokemon } = liked;

  const cx = likedPokemon.filter((item) => item.pokemon === data.id);

  // console.log(cx);
  // if (cx.length > 0) {
  //   if (cx[0].isLike) {
  //     setLike(true);
  //     console.log('liked');
  //   } else {
  //     setLike(false);
  //     console.log('disliked');
  //   }
  // }

  const handleLike = (e) => {
    e.preventDefault();
    setLike(!isLiked);
    dispatch(likePokemonAction(data.id, !isLiked));
  };

  useEffect(() => {
    if (cx.length === 0) {
      setLike(false);
    } else if (cx[0].isLike) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [cx]);

  return (
    <button
      type="button"
      onClick={(e) => handleLike(e)}
      className="text-rose-500 transition duration-300 ease-in-out transform hover:scale-110"
    >
      <Heart size={16} weight={isLiked ? 'fill' : 'bold'} />
    </button>
  );
}

export default like;
