import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocioStore } from "../stores/socios.store";

function NavBar() {
  const token = useSocioStore((state) => state.token);
  const logout = useSocioStore((state) => state.logout);
  const [open, setOpen] = useState(false);
  const [usuario, setUsuario] = useState(null)
  const navigate = useNavigate();


  // obtener email/nombre desde token si existe
  function decodeToken(token) {
    if (!token) return null;
    try {
      const part = token.split('.')[1];
      return JSON.parse(atob(part));
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  //const storedToken = localStorage.getItem('tokenSocio') || localStorage.getItem('tokenAdmin');
  //const userPayload = decodeToken(storedToken);

  //const userEmail = userPayload?.email || null;

   useEffect(() => {
    const usuario = decodeToken(token)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUsuario(usuario || null);
    
  },[token])

  function handleLogout() {
    localStorage.removeItem('tokenSocio');
    localStorage.removeItem('tokenAdmin');
    logout()
    navigate('/');
  }

  function goToChangePassword() {
    navigate('/cambiar-contrasena');
    setOpen(false);
  }

  function goToMisActividades() {
    navigate('/mis-actividades');
    setOpen(false);
  }

  return (
    <header className="w-full bg-white shadow py-3">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="text-lg font-bold text-gray-800">Gimnasio</div>

        <div className="relative" >
          <button type="button" onClick={() => setOpen(!open)} className="flex items-center gap-2 px-3 py-1 rounded hover:bg-gray-100">
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">
              {usuario?.email?.charAt(0)?.toUpperCase()}
            </div>
            <span className="hidden sm:inline text-gray-700">Cuenta</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-fit bg-white border rounded shadow-lg py-2 z-20 transform origin-top-right animate-scale-in">
              <div className="border-b pb-3 ps-1">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 aspect-square rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">{usuario?.email?.charAt(0)?.toUpperCase()}</div>
                  <div className="flex flex-col px-2">
                    <span>{usuario?.email}</span>
                    <span className="text-xs">{usuario?.admin ? 'Administrador' : 'Socio'}</span>
                  </div>
                </div>
              </div>

              <button onClick={goToMisActividades} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 4h6v2H7V7zm0 4h4v2H7v-2z"/></svg>
                Mis actividades
              </button>

              <button onClick={goToChangePassword} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a2 2 0 00-2 2v2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2h-2V4a2 2 0 00-2-2z"/></svg>
                Cambiar contraseña
              </button>

              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 4.5A1.5 1.5 0 014.5 3h5A1.5 1.5 0 0111 4.5V6h-1V4.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h5a.5.5 0 00.5-.5V14h1v1.5A1.5 1.5 0 019.5 17h-5A1.5 1.5 0 013 15.5v-11z" clipRule="evenodd"/><path d="M15.854 9.354a.5.5 0 00-.708-.708L13.5 10.293V6.5a.5.5 0 00-1 0v4.793l-1.646-1.647a.5.5 0 10-.708.708l2.5 2.5a.5.5 0 00.708 0l2.5-2.5z"/></svg>
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
