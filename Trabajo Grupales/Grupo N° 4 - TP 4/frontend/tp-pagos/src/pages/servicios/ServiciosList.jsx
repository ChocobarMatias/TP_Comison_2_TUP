import { useServicios } from "../../hooks/useServicio";
import Table from "../../components/Table";
import Button from "../../components/Button";

export default function ServiciosList() {
  const { servicios, loading, eliminarServicio } = useServicios();

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Servicios</h1>

      <Button to="/servicios/nuevo" className="btn-primary">
        + Nuevo Servicio
      </Button>

      <Table
        data={servicios}
        columns={[
          { label: "ID", key: "id" },
          { label: "Nombre", key: "nombre" },
          { label: "Descripción", key: "descripcion" },
          { label: "Precio Total", key: "precio_total" },
        ]}
        actions={[
          {
            label: "Editar",
            to: (s) => `/servicios/editar/${s.id}`,
            variant: "warning",
          },
          {
            label: "Eliminar",
            onClick: (s) => eliminarServicio(s.id),
            variant: "danger",
          },
        ]}
      />
    </div>
  );
}