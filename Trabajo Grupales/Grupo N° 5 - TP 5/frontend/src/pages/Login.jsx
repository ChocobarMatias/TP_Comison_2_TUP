function Login() {

    return (
        <>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">Logueo del gimnasio</h1>
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center">Inicia sesion con tu usuario y contraseña</h2>
            <form action="" className="flex flex-col gap-5">
                {/* Usuario */}
                <div className="flex flex-col">
                    <label htmlFor="usuario" className="text-gray-700 font-medium mb-1">
                    Usuario:
                    </label>
                    <input
                    type="email"
                    id="usuario"
                    name="usuario"
                    placeholder="tuemail@gym.com"
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
                    placeholder="••••••••"
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>
                {/* Boton de iniciar sesion */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold py-2 rounded-lg mt-4
                    hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                    Iniciar Sesión
                </button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Login