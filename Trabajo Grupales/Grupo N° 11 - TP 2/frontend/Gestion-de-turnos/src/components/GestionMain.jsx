import { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

export const GestionMain = ({ turnos, loading, error, onCreateTurno, onDeleteTurno }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fechayhora: '',
    idCliente: '',
    idServicio: ''
  });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onCreateTurno(formData);
    handleClose();
    setFormData({ fechayhora: '', idCliente: '', idServicio: '' });
  };

  if (loading) return <Container className="py-5"><p>Cargando turnos...</p></Container>;
  if (error) return <Container className="py-5"><p>Error: {error}</p></Container>;

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestión de Turnos</h1>
        <Button variant="primary" onClick={handleShow}>
          Nuevo Turno
        </Button>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha y Hora</th>
            <th>Cliente</th>
            <th>Servicio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos?.map((turno) => (
            <tr key={turno.id}>
              <td>{turno.id}</td>
              <td>{turno.fechayhora}</td>
              <td>{turno.cliente || turno.clienteId || turno.idCliente}</td>
              <td>{turno.servicio || turno.servicioId || turno.idServicio}</td>
              <td>
                <Button 
                  variant="danger" 
                  size="sm" 
                  onClick={() => onDeleteTurno(turno.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Turno</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Fecha y Hora</Form.Label>
              <Form.Control
                type="text"
                name="fechayhora"
                value={formData.fechayhora}
                onChange={handleChange}
                required
                placeholder="Ejemplo: 2025-11-16 14:30"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cliente ID</Form.Label>
              <Form.Control
                type="number"
                name="idCliente"
                value={formData.idCliente}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Servicio ID</Form.Label>
              <Form.Control
                type="number"
                name="idServicio"
                value={formData.idServicio}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Crear Turno
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default GestionMain;
