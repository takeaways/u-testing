import { useState } from 'react';
import './App.css';

function App() {

  const [backgroundColor,setBackgroundColor] = useState('red')
  const newButtonColor = backgroundColor === "red" ? "blue" : "red"

  const handleChangeBackgroundColor = ()=>{
    setBackgroundColor(newButtonColor)
  }

  return (
    <div className="App">
      <button 
        onClick={handleChangeBackgroundColor}
        style={{backgroundColor}}>
          Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
