import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PrestamosPage from './Pages/PrestamosPage.jsx'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <div className='d-flex flex-column min-vh-100'>
      <main className='flex-fill app-main'>
        <Routes>
          <Route path='/prestamos' element={<PrestamosPage />} />
        </Routes>
      </main>
      </div>
    </BrowserRouter>
  )
}

export default App
