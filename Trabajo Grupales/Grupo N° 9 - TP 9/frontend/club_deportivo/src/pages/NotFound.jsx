import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="text-center p-8 md:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-lg w-full">
        
        {}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-600 dark:text-red-500 mb-4 animate-bounce">
          404
        </h1>
        
        {}
        <div className="text-5xl mb-4 text-yellow-500">
            ⚠️
        </div>

        {}
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Página No Encontrada
        </h2>
        
        <p className="text-lg mb-8 text-gray-500 dark:text-gray-400">
          Lo sentimos, la ruta a la que intentas acceder no existe. 
          Verifica la URL o regresa a la página principal.
        </p>
        
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Volver a la Página de Inicio
        </Link>
        
      </div>
    </div>
  );
};

export default NotFound;