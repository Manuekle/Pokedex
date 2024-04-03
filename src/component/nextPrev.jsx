import React from 'react';

function nextPrev({ offset, incrementOffset, decrementOffset }) {
  return (
    <div className="flex flex-row gap-4 justify-center w-full">
      {offset > 0 && (
        <button
          type="button"
          className="border border-zinc-900 rounded-md bg-[#0A0A0A] py-2 px-4 text-sm text-amber-200 font-bold lowercase transition duration-300 ease-in-out transform hover:bg-zinc-900"
          onClick={decrementOffset}
        >
          Prev
        </button>
      )}
      <button
        type="button"
        className="border border-zinc-900 rounded-md bg-[#0A0A0A] py-2 px-4 text-sm text-amber-200 font-bold lowercase transition duration-300 ease-in-out transform hover:bg-zinc-900"
        onClick={incrementOffset}
      >
        Next
      </button>
    </div>
  );
}

export default nextPrev;
