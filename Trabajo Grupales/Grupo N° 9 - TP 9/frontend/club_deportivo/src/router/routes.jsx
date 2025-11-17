import HomePage from '../pages/Homepage';
import NotFound from '../pages/NotFound';
//import Dashboard from '../pages/Dashboard';



export const routes = [
   
    {
        path: '/',
        element: <HomePage></HomePage>, 
        exact: true,
    },
    

    {
        path: '/perfil',
        element: <h1>Página de Perfil (Reemplazar)</h1>,
    },
    
    
    {
        path: '*', 
        element: <NotFound />, 
    },
];

