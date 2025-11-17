import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const PanelMain = ({ userName }) => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Panel Principal</h1>
      
      <div className="mb-4">
        <p className="lead">Bienvenido, {userName}</p>
      </div>

      <Row>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Gestión de Turnos</Card.Title>
              <Card.Text>
                Administra los turnos del sistema
              </Card.Text>
              <Link to="/gestion" className="btn btn-primary">
                Ir a Gestión
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Clientes</Card.Title>
              <Card.Text>
                Gestiona la información de clientes
              </Card.Text>
              <Link to="/clientes" className="btn btn-primary">
                Ver Clientes
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Servicios</Card.Title>
              <Card.Text>
                Administra los servicios disponibles
              </Card.Text>
              <Link to="/servicios" className="btn btn-primary">
                Ver Servicios
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PanelMain;
