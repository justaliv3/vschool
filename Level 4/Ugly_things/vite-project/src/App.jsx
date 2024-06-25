import React from 'react';
import { UglyThingsProvider } from './component/uglythingscontext';
import Form from './component/form';
import UglyThingList from './component/uglythinglist';

const App = () => {
  return (
    <UglyThingsProvider>
      <div className="App">
        <h1>Ugly Things</h1>
        <Form />
        <UglyThingList />
      </div>
    </UglyThingsProvider>
  );
};

export default App;
