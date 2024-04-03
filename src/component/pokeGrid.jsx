/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { listPokemon } from '../actions/pokemonActions';
import { getAllPokemon, getPokemon } from '../services/pokemonService';
import PokeCard from './pokeCard';
import Loader from './loader';

function pokeGrid({ offset, search, loading, isLoading, shinyMode }) {
  const [pokemonData, setPokemonData] = useState([]);

  const apiURL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=9`;

  const loadPokemon = async (data) => {
    const poke = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonGet = await getPokemon(pokemon);
        return pokemonGet;
      })
    );
    setPokemonData(poke);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getAllPokemon(apiURL);
      await loadPokemon(response.results);
      isLoading(true);
      setTimeout(() => {
        isLoading(false);
      }, 500);
      // console.log(response);
    }
    fetchData();
  }, [offset]);

  return (
    <div className="w-full flex items-center justify-center">
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
        {loading ? (
          <span className="col-span-3 w-full h-[30em] flex items-center justify-center">
            <Loader color="#FBBF24" size={40} />
          </span>
        ) : (
          <>
            {pokemonData
              .filter((pokemon) => {
                if (search === '') {
                  return pokemon;
                }
                return pokemon.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((pokemon) => (
                <PokeCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  shinyMode={shinyMode}
                />
              ))}
          </>
        )}
      </section>
    </div>
  );
}

export default pokeGrid;
