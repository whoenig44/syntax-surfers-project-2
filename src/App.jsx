import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import background from './public/smanticsurferimage.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to the Health Monitoring Application!!!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Push to main branch of Git Repo to trigger rebuild of Production Application
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about the React framework and Vite Web Bundler
      </p>
    </>
  )
}

export default App
