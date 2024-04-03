import React from 'react';
import { MagicWand } from '@phosphor-icons/react';

function shiny({ setShinyMode, shinyMode }) {
  return (
    <button
      type="button"
      onClick={() => setShinyMode(!shinyMode)}
      className={` ${
        shinyMode
          ? 'bg-zinc-900 relative border font-bold border-zinc-900 rounded-md h-full py-2 px-3 text-sm text-amber-300 lowercase appearance-none focus:outline-none focus:bg-zinc-900 hover:bg-zinc-900 transition duration-300 ease-in-out'
          : 'relative border font-bold border-zinc-900 rounded-md bg-[#0A0A0A] h-full py-2 px-3 text-sm text-amber-300 lowercase appearance-none focus:outline-none focus:bg-zinc-900 hover:bg-zinc-900 transition duration-300 ease-in-out'
      }`}
    >
      <MagicWand size={16} weight="bold" />
    </button>
  );
}

export default shiny;
