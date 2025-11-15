import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Prestamos from './Components/Prestamos/Prestamos'
import './App.css'
import Alumnos from './Components/Alumnos/Alumnos.jsx'
import LoginPage from './Pages/LoginPage'
import Libros from './Components/Libros/Libros.jsx'
import Registro from './Components/Registro/Registro.jsx'
import HomePage from './Pages/HomePage.jsx'
import AdminPage from './Pages/AdminPage.jsx'
import Footer from './Components/Common/Footer.jsx'
import CambioPassword from './Pages/CambioPassword.jsx'

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
        <Route path='/admin/*' element={<AdminPage />} />
        <Route path='/auth/cambio_password/:token' element={<CambioPassword />} />
        <Route path='*' element={<Navigate to='/' />} />

      </Routes>
      </main>
      <Footer />
    </div>
      
      
    </BrowserRouter>
  )
} 


export default App
