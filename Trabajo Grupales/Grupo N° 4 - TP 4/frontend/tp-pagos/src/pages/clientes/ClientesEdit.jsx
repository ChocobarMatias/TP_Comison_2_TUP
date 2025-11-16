import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { clientesService } from "../../services/clienteService";
import { useClientes } from "../../hooks/useClientes";

import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ClientesEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { actualizarCliente } = useClientes();

  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchCliente = async () => {
      const res = await clientesService.getById(id);
      setForm(res.data);
    };
    fetchCliente();
  }, [id]);

  if (!form) return <p>Cargando cliente...</p>;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await actualizarCliente(id, form);
    navigate("/clientes");
  };

  return (
    <div>
      <h1>Editar Cliente</h1>

      <form onSubmit={handleSubmit}>
        <InputField label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
        <InputField label="Apellido" name="apellido" value={form.apellido} onChange={handleChange} required />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />

        <Button type="submit">Actualizar</Button>
      </form>
    </div>
  );
}
