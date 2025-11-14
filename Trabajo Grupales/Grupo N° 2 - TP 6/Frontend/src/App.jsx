import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './Pages/LoginPage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
    
      
        <Route path='/login' element={<LoginPage/>} />
       
        <Route path='/' element={<h1 className='text-center mt-5'>Welcome to the App</h1>} />
      </Routes>
      
      
    </BrowserRouter>
  )
} 


export default App
