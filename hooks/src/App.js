import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCoutner]=useState(5)

  const addValue=()=>{
    if(counter>0 && counter<20){
      setCoutner(counter+1);
      console.log("Avenger Added", counter);
    }
    else{
      counter=19;
    }
  }

  const remValue=()=>{
    if(counter>0 && counter<20){
      setCoutner(counter-1);
      console.log("Avenger Removed", counter);
    }
    else{
      counter=1;
    }
  }

  return (
    <div className="App">
      <h1>The Avengers</h1>
      <h2>Avengers Assemble: {counter}</h2>

      <button
      onClick={addValue}
      >Add Avenger: {counter}</button>
      <br></br>
      <button onClick={remValue}>Remove Avenger: {counter}</button>
    </div>
  );
}

export default App;
