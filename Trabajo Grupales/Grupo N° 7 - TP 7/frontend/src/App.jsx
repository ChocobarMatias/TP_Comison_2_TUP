import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';










import AgregarMedAdmin from './components//AgregarMedAdimn';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bodyyy'>
     <BrowserRouter>
      <Navbar />

      {/* Rutas de la aplicación */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/medic' element={<AgregarMedAdmin />} />
      </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
