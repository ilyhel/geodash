import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Makeblock } from './Factory/BaseComponentFactory';
import { jsonfile } from './Services/jsonfile';

const App = () => {
  return (
    // Provide the store to the app
    <div className="App">
      <header className="">
   
      {jsonfile.dashboard.fragment.map(b =>Makeblock(b))}
   
     </header>
    </div>
  );
};
export default App;
