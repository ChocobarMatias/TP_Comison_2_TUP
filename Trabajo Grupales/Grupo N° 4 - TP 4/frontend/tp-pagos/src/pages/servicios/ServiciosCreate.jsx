import { useState } from "react";
import { serviciosService } from "../../services/servicioService";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function ServiciosCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio_total: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await serviciosService.create(form);
    navigate("/servicios");
  };

  return (
    <div>
      <h1>Nuevo Servicio</h1>

      <form onSubmit={handleSubmit}>
        <InputField label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required />
        <InputField label="Descripción" name="descripcion" value={form.descripcion} onChange={handleChange} />
        <InputField label="Precio Total" name="precio_total" value={form.precio_total} onChange={handleChange} required />

        <Button type="submit" className="btn-primary">
          Guardar
        </Button>
      </form>
    </div>
  );
}