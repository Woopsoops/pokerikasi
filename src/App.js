import { useState } from 'react';
import arvo from './Arvo.js';
import './App.css';

function App() {
  const [hand, setKasi] = useState([]);
  
  const arvoKasi = () => {
    setKasi(arvo());
  }

  return (
    <div className="App">
      <button onClick={arvoKasi}>Arvo pokerikäsi</button>
      <h1>Pokerikäsi:</h1>
      <div className="cards">
        {hand.map((card, i) => (
          <div key={i}>{card}</div>
        ))}
      </div>
    </div>
  );
}

export default App;