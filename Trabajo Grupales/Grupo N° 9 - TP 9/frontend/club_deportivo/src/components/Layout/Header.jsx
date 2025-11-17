import { useAuth } from '../../context/AuthContext'; 

const Header = ({ setSidebarOpen }) => {
  const { logout, user } = useAuth(); 

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none lg:hidden" 
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="ml-4 hidden sm:block">
            <h1 className="text-xl font-semibold text-gray-900">Gestión de Socios</h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          
          <span className="text-sm font-medium text-gray-700 hidden md:block">
            Hola, {user ? user.nombre : 'Usuario'}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;