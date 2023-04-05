import './App.css';
import { useState } from 'react';

function App() {
  const [showText, setShowText] = useState("false")

  return (
    <div className='App'>
      <button onClick={ () => {
        setShowText(!showText)
      }}
      >
        Show/Hide
      </button>
      {showText &&<h1>Hey, how are you</h1>}
    </div>
  )
}


export default App;