import React from 'react';
// import Search from './filters/search';
import Dark from './filters/dark';
// import Types from './filters/types';
import Shiny from './filters/shiny';

function filters({ setShinyMode, shinyMode }) {
  return (
    <div className="flex flex-row gap-4 justify-center items-center w-full">
      {/* <Search />
      <Types /> */}
      <Shiny setShinyMode={setShinyMode} shinyMode={shinyMode} />
      <Dark />
    </div>
  );
}

export default filters;
