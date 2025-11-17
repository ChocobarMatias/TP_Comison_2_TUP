// src/pages/DashboardPage.jsx
import { useAuthStore } from "../store/useAuthStore";
import Button from "../components/Button";
import Table from "../components/Table";
import { useFetch } from "../hooks/useFetch";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const { data: libros, loading, error } = useFetch("/libros"); // Ajustá a tu ruta

  const columns = [
    { key: "id_libro", label: "ID" },
    { key: "titulo", label: "Título" },
    { key: "autor", label: "Autor" },
    { key: "anio", label: "Año" },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="flex justify-between items-center px-6 py-4 bg-white border-b">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">
            Panel de Biblioteca
          </h1>
          <p className="text-sm text-slate-500">
            Bienvenido{user ? `, ${user.nombre || user.email}` : ""}.
          </p>
        </div>
        <Button onClick={logout}>Cerrar sesión</Button>
      </header>

      <section className="p-6">
        <h2 className="text-lg font-semibold mb-3">Listado de libros</h2>

        {loading && <p>Cargando libros...</p>}
        {error && (
          <p className="text-red-600 text-sm">
            Error al cargar libros. Ver consola.
          </p>
        )}

        {!loading && !error && (
          <Table columns={columns} data={libros || []} />
        )}
      </section>
    </main>
  );
}
