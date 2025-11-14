import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Alumnos from './Components/Alumnos/Alumnos'

function App() {
  

  return (
    <BrowserRouter>
    <div className='d-flex flex-column min-vh-100'>
    <Navbar/>
      <main className='flex-fill app-main'>
        <Routes>
        <Route path='/' element={<h1 className='text-center mt-5'>Welcome to the App</h1>} />
        <Route path='/alumnos' element={<Alumnos/>} />
      </Routes>
      </main>
      </div>
    </BrowserRouter>
  )
}

export default App
