import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Prestamos from './Components/Prestamos/Prestamos'
import './App.css'
import Alumnos from './Components/Alumnos/Alumnos'
import LoginPage from './Pages/LoginPage'
import Registro from './Components/Registro/Registro.jsx'
import Libros from './Components/Libros/Libros'
import HomePage from './Pages/HomePage.jsx'
import Footer from './Components/Common/Footer.jsx'

function App() {
  

  return (
    <BrowserRouter>
    <div className='app-container d-flex flex-column min-vh-100'>
    
      <main className='flex-fill app-main'>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/alumnos' element={<Alumnos/>} />
        <Route path='/prestamos' element={<Prestamos />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/libros' element={<Libros />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      </main>
      <Footer />
    </div>
      
      
    </BrowserRouter>
  )
} 


export default App
