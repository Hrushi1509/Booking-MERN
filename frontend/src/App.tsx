import { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><h1>Home</h1></Layout>}/>
          <Route />
          <Route />
        </Routes>
    </BrowserRouter>
  )
}

export default App
