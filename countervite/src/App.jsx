import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)

  const addValue = () =>{
    setCounter(counter + 1)
  }
  const subValue = () =>{
    if(counter>0){
      setCounter(counter - 1)

    }
  }


  return (
   <>
   <h1>Counter Project</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Increase Value</button>
    <br />
    <button onClick={subValue}>Decrease Value</button>
   </>
  )
}

export default App
