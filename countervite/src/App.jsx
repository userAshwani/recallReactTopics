import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(3)

  const addValue = () =>{

    // know this all combine and behaving like bunch of package as they got they have assign same work to do
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    
    // to overcome this problem
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
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
