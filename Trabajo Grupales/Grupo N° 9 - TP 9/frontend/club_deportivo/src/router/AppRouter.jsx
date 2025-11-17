import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes.jsx';
import { AuthProvider } from '../context/AuthContext.jsx';

const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;