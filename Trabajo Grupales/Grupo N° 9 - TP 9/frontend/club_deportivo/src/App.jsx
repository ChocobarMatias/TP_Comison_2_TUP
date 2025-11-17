// src/App.jsx

import ThemeToggle from './components/ThemeToggle';
import React, { useState, useEffect } from 'react';
import AppRouter from './router/AppRouter'; 
// NO importamos Router aquí, ya que asumimos que está en main.jsx

function App() {
    // 1. Inicializa el tema leyendo de localStorage o usando el valor por defecto
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light-theme'
    );

    // 2. Efecto para aplicar la clase al elemento <html> (raíz del documento)
    useEffect(() => {
        const root = document.documentElement; // Elemento <html>

        // Limpia las clases anteriores
        root.classList.remove('light-theme', 'dark-theme', 'dark');
        
        // Aplica la clase del tema (light-theme o dark-theme)
        root.classList.add(theme);

        // Si el tema es oscuro, también añade la clase 'dark' que activa Tailwind
        if (theme === 'dark-theme') {
            root.classList.add('dark');
        }

        // Guarda la preferencia en localStorage
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 3. Función para alternar el tema
    const toggleTheme = () => {
        setTheme(prevTheme => 
            prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'
        );
    };

    return (
        // El Router se asume que está en main.jsx.
        // min-h-screen asegura que el contenedor principal cubra toda la altura.
        <div className="min-h-screen">
            <AppRouter />
            {/* Botón flotante para alternar el tema */}
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
}

export default App;