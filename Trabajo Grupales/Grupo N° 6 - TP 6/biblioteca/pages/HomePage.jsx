// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-3">
          Sistema de Biblioteca
        </h1>
        <p className="text-slate-600 mb-6">
          Gestioná libros, usuarios y préstamos desde un panel simple y moderno.
        </p>
        <Button>
          <Link to="/login">Ingresar al sistema</Link>
        </Button>
      </div>
    </main>
  );
}
