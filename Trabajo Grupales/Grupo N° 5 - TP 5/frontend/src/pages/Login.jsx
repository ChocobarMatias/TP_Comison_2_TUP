import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSocioStore } from "../stores/socios.store";
import { toast } from "react-toastify";

function Login() {
    const [role, setRole] = useState("socio"); // 'socio' | 'admin'
    const loginSocio = useSocioStore((state) => state.login)
    const isAdmin = useSocioStore((state) => state.isAdmin())
    const socioToken = useSocioStore((state) => state.token)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (socioToken) {
            if (isAdmin) navigate('/admin')
            else navigate('/reservar')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            // Decide ruta según la pestaña seleccionada
            const url = role === "admin" ? "http://localhost:8080/api/admin/login" : "http://localhost:8080/api/auth/login";

            const resp = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password }),
            });

            // Manejo robusto del body (puede ser vacío o no-JSON)
            const text = await resp.text();
            let data = {};
            // eslint-disable-next-line no-unused-vars
            try { data = text ? JSON.parse(text) : {}; } catch (err) { data = { message: text || `HTTP ${resp.status}` }; }

            if (!resp.ok) {
                const msg = data?.error || data?.message || `Error HTTP ${resp.status}`;
                setError(msg);
            } else {
                // Guardar token en localStorage con clave diferente según rol
                const token = data.token || data?.Token || data?.accessToken || null;
                //const storageKey = role === "admin" ? "tokenAdmin" : "tokenSocio";
                // if (token && role === "socio") loginSocio(token) 
                // if (token && role === "admin") loginAdmin(token)
                //localStorage.setItem(storageKey, token);
                if (token) loginSocio(token) 

                // Redirigir según rol
                if (role === "admin") {
                    toast("Bienvenido")
                    navigate('/admin');
                } else {
                    toast("Bienvenido")
                    navigate('/reservar');
                }
            }
        } catch (err) {
            console.log(err);
            setError("Error de red o servidor");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">Ingresa al gimnasio</h1>
            <div className="flex flex-col w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
            <p className="text-center pb-1">Elíge el tipo de cuenta</p>
                <div className="grid grid-cols-2 mb-6">
                    <button
                        type="button"
                        onClick={() => setRole("socio")}
                        className={"cursor-pointer px-4 py-2 rounded-l-lg font-medium " + (role === "socio" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700")}
                    >
                        Socio
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole("admin")}
                        className={"cursor-pointer px-4 py-2 rounded-r-lg font-medium " + (role === "admin" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700")}
                    >
                        Admin
                    </button>
                </div>

                <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center">Inicia sesion con tu usuario y contraseña</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Usuario */}
                    <div className="flex flex-col">
                        <label htmlFor="usuario" className="text-gray-700 font-medium mb-1">
                            Usuario:
                        </label>
                        <input
                            type="email"
                            id="usuario"
                            name="usuario"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={role === "socio" ? "tuemail@gym.com" : "admin@gym.com"}
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    {/* Contraseña */}
                    <div className="flex flex-col">
                        <label htmlFor="contraseña" className="text-gray-700 font-medium mb-1">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="contraseña"
                            name="contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm">{error}</div>
                    )}

                    {/* Boton de iniciar sesion */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60"
                    >
                        {loading ? "Iniciando..." : "Iniciar Sesión"}
                    </button>
                </form>
                <Link to={'/reset-solicitud'} className="mx-auto text-center mt-4">¿Olvidaste tu contraseña?</Link>
            </div>
        </div>
    )
}

export default Login