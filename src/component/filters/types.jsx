import React from 'react';
// import { Badge } from '../../utils/ui/badge.tsx';
import { Sliders } from '@phosphor-icons/react';

function types() {
  return (
    <button
      type="button"
      className="relative border font-bold border-zinc-900 rounded-md bg-[#0A0A0A] h-full py-2 px-3 text-sm text-amber-300 lowercase appearance-none focus:outline-none focus:bg-zinc-900 hover:bg-zinc-900 transition duration-300 ease-in-out"
    >
      <Sliders size={16} weight="bold" />
    </button>
  );
}

export default types;
