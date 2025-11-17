import { Container } from 'react-bootstrap';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container>
        <div className="text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Sistema de Gestión de Turnos - Grupo 11
          </p>
          <small className="text-muted">
            Desarrollado con React + Vite
          </small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
