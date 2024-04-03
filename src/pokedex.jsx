/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';

import Created from './component/created';
// import Dark from './component/filters/dark';
import PokeGrid from './component/pokeGrid';
import NextPrev from './component/nextPrev';
import Filters from './component/filters';

function pokedex() {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, isLoading] = useState(true);

  const incrementOffset = () => {
    // offset += 20;
    setOffset(offset + 9);
  };

  const decrementOffset = () => {
    // offset -= 20;
    setOffset(offset - 9);
  };

  const [shinyMode, setShinyMode] = useState(false);

  return (
    <section className="relative h-full w-full bg-black">
      <div className="flex flex-col gap-6 h-full xl:h-svh pt-12 pb-24 z-50">
        <Filters
          search={search}
          setSearch={setSearch}
          setShinyMode={setShinyMode}
          shinyMode={shinyMode}
        />
        <PokeGrid
          shinyMode={shinyMode}
          offset={offset}
          search={search}
          loading={loading}
          isLoading={isLoading}
        />
        {!loading && (
          <NextPrev
            offset={offset}
            incrementOffset={incrementOffset}
            decrementOffset={decrementOffset}
          />
        )}
      </div>
      {/* <div className="hidden xl:block relative">
        <div className="fixed z-20 top-0 left-0 justify-end items-end right-0 flex p-4 flex-col gap-2 backdrop-blur-sm xl:backdrop-blur-none bg-black/30 xl:bg-transparent">
          
        </div>
      </div> */}
      <Created />
    </section>
  );
}

export default pokedex;
