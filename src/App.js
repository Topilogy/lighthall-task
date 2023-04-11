import './App.css';
import { useState } from "react"

function App() {
  const value = localStorage.getItem('num')
  const [number, setNumber] = useState(value ? JSON.parse(value) : 0);
  
  return (
    <div className='App'>
      <button
        onClick={() => {
          setNumber(number + 1);
          localStorage.setItem('num', JSON.stringify(number+1))
        }}
      >
        Increase count
      </button>
      <p>{number} </p>
    </div>
  );
};



export default App;