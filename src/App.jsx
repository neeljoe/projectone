import React from 'react'
import { BrowserRouter,
          Routes,
          Route
 } from 'react-router'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App