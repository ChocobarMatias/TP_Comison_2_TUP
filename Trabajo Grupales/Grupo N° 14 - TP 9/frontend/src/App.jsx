import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <HomePage/>
    </>
  )
}

export default App
