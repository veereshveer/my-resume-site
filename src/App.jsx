import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="container text-center mt-5">
      <h1 className="display-4 text-primary">My Resume</h1>
      <p className="lead">Welcome to my personal resume site!</p>

      <button className="btn btn-success">Download Resume</button>
    </div>
  )
}

export default App
