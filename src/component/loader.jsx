/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Ring } from '@uiball/loaders';

function Loader(props) {
  return (
    <Ring size={props.size} lineWeight={5} speed={2} color={props.color} />
  );
}

export default Loader;
