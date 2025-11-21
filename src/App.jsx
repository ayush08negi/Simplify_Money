import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <Link to="/" className="text-3xl font-semibold">
          Simplify Money – Metals
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:metal" element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
