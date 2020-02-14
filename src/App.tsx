import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Makeblock } from './Factory/BaseComponentFactory';
import { jsonfile } from './Services/jsonfile';



const App = () => {
  
function  _addComponenets1(){
  setData(1);
}
function  _addComponenets2(){
  setData(2);
}
function  _removeComponenets(){
  setData(3);
}
  const [data, setData] = useState<number>(0);
  
  return (
    // Provide the store to the app
    <div className="App">
      <header className="">
   
      {jsonfile.dashboard.fragment.map(b =>Makeblock(b))}
   
     </header>
     Add Componenets
     <div>
       <button onClick={()=>_addComponenets1()}>cmp1</button>
       <button onClick={()=>_addComponenets2()}>cmp2</button>
       <button onClick={()=>_removeComponenets()}>remove</button>
     </div>
<div>
{Makeblock(jsonfile.dashboard.fragment[data])}
</div>
    </div>
  );
};
export default App;
