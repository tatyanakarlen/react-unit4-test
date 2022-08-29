import React from 'react';
import { useState } from "react";
import './App.css';
import Circles from './Components/Circles/Circles'
import CircleSelector from './Components/CircleSelector/CircleSelector'




function App() {

  const [circleNumber, setCircleNumber] = useState(0);

  return (
    <div className="App">
    <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
    <main>
      <CircleSelector circleNumber={circleNumber} setCircleNumber={setCircleNumber}/>
      <Circles circleNumber={circleNumber} />
    </main>
      
    </div>
  );
}

export default App;
