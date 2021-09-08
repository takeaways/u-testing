import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [backgroundColor,setBackgroundColor] = useState('red')

  const handleChangeBackgroundColor = ()=>{
    setBackgroundColor(prev => prev === "red" ? "blue" : "red")
  }

  return (
    <div className="App">
      <button 
        onClick={handleChangeBackgroundColor}
        style={{backgroundColor}}>
          Change to {backgroundColor === "red" ? "blue" : "red"}
      </button>
    </div>
  );
}

export default App;
