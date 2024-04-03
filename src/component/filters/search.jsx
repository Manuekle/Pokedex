import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

function search({ setSearch }) {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        className="relative border font-bold border-zinc-900 rounded-md bg-[#0A0A0A] pl-8 py-2 text-sm text-amber-300 lowercase placeholder-amber-200 appearance-none focus:outline-none focus:bg-zinc-900 hover:bg-zinc-900 transition duration-300 ease-in-out"
      />
      <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-amber-200">
        <MagnifyingGlass size={13} weight="bold" />
      </span>
    </div>
  );
}

export default search;
