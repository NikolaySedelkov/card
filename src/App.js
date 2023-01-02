import './App.css';
import From from "./additionally/Form.js"
import Cards from "./additionally/Cards.js"
import { useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  const addCards = card => {
    setCards([...cards, card]);
  }
  console.log(cards);
  return (
    <div className="App">
      <Cards cards={cards}/>
      <From func={addCards}/>
    </div>
  );
}

export default App;
