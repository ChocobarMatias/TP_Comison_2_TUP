import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Prestamos from './Components/Prestamos/Prestamos'
import './App.css'
import Alumnos from './Components/Alumnos/Alumnos'
import LoginPage from './Pages/LoginPage'
import Registro from './Components/Registro/Registro.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
    
      
        <Route path='/login' element={<LoginPage/>} />
       
        <Route path='/' element={<h1 className='text-center mt-5'>Welcome to the App</h1>} />
        <Route path='/alumnos' element={<Alumnos/>} />
        <Route path='/prestamos' element={<Prestamos />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
      
      
    </BrowserRouter>
  )
} 


export default App
