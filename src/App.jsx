import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
  return (
    <>
      <div className='bg-black min-h-screen w-full text-white '>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />

          </Routes>
        </Router>
      </div>

    </>

  )
}

export default App
