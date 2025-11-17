import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ theme, toggleTheme }) => {
    const isDark = theme === 'dark-theme';

    return (
        <button
            onClick={toggleTheme}
            className="fixed bottom-5 right-5 p-3 rounded-full shadow-xl transition duration-300 ease-in-out z-50
                       bg-gray-200 text-gray-800 hover:bg-gray-300
                       dark:bg-gray-700 dark:text-yellow-400 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-500"
            aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
            title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
        >
            {isDark ? <Sun size={24} /> : <Moon size={24} />}
        </button>
    );
};

export default ThemeToggle;