import React from 'react';
import { useUglyThings } from './uglythingscontext';
import UglyThing from './uglything';

const UglyThingList = () => {
  const { state } = useUglyThings();

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error.message}</div>;
  }

  return (
    <div>
      {state.uglyThings.map(thing => (
        <UglyThing key={thing._id} thing={thing} />
      ))}
    </div>
  );
};

export default UglyThingList;
