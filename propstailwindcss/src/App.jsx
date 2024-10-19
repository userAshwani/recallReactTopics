import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h2 className='bg-green-700'>Props & Tailwind</h2>
      <Card username="ash1" para="1" />
      <Card username="ash2" para="2"/>
      <Card username="ash3" para="3"/>
    </>
  )
}

export default App
