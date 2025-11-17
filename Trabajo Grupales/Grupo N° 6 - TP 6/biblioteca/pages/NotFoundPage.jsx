// src/pages/NotFoundPage.jsx
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6 text-slate-600">Página no encontrada.</p>
      <Button>
        <Link to="/">Volver al inicio</Link>
      </Button>
    </main>
  );
}
