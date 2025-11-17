import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useClientes } from "../../hooks/useClientes";

import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ClientesCreate() {
  const { crearCliente } = useClientes();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearCliente(form);
    navigate("/clientes");
  };

  return (
    <div>
      <h1>Nuevo Cliente</h1>

      <form onSubmit={handleSubmit}>
        <InputField label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
        <InputField label="Apellido" name="apellido" value={form.apellido} onChange={handleChange} required />
        <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />

        <Button type="submit">Guardar</Button>
      </form>
    </div>
  );
}
