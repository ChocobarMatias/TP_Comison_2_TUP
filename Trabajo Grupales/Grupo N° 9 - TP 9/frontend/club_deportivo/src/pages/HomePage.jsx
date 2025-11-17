// src/pages/HomePage.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const StatsCard = ({ title, value, icon, bgColor }) => (
   
    <div className={`flex items-center p-6 rounded-xl shadow-xl text-white ${bgColor} transform hover:shadow-2xl transition duration-300 ease-in-out`}>
        <div className="text-5xl mr-5">{icon}</div>
        <div>
            <div className="text-md font-medium opacity-90">{title}</div>
            <div className="text-4xl font-extrabold">{value}</div>
        </div>
    </div>
);

const HomePage = () => {
    
    const statsData = [
        { title: "Total Socios", value: "3", icon: "👥", bgColor: "bg-blue-600" },
        { title: "Deportes Activos", value: "3", icon: "⚽", bgColor: "bg-green-600" },
        { title: "Membresías Activas", value: "4", icon: "💳", bgColor: "bg-purple-600" },
        { title: "Socios en Mora", value: "1", icon: "🚨", bgColor: "bg-red-600" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 md:p-10">
            
            {}
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                    Panel de Gestión del Club
                </h1>
                <p className="text-xl text-gray-600">
                    Resumen rápido de las métricas clave del sistema.
                </p>
            </header>

            {/* Sección de Estadísticas (Grid) */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {statsData.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </section>

            <hr className="my-10 border-gray-300" />

            {/* Sección de Navegación Rápida */}
            <section className="text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                    Acceso Rápido a Módulos
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    
                    {/* Botón Gestión de Socios */}
                    <Link to="/socios" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        👥 Gestión de Socios
                    </Link>
                    
                    {/* Botón Administrar Membresías */}
                    <Link to="/membresias" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        💳 Administrar Membresías
                    </Link>
                    
                    {/* Botón Historial de Pagos */}
                    <Link to="/pagos" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        💵 Historial de Pagos
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HomePage;