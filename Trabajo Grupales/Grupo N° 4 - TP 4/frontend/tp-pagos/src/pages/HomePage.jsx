

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Sistema de Gestión de Pagos y Cuotas</h1>
      <p>Bienvenido. Inicie sesión para continuar.</p>

      <a
        href="/login"
        style={{
          padding: "10px 20px",
          background: "#007bff",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "18px",
        }}
      >
        Ingresar
      </a>
    </div>
  );
}