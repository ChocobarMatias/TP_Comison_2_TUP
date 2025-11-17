import { useState, useEffect } from 'react';
import { getSocios, getDeportes, getPagos, getDeudores, getMembresias } from '../../services/api'; 

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalSocios: 0,
    totalDeportes: 0,
    totalPagosMes: 0, 
    deudaTotal: 0,
    totalMembresias: 0 
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [
          sociosData, 
          deportesData, 
          pagosData, 
          deudoresData, 
          membresiasData 
        ] = await Promise.all([
          getSocios(),
          getDeportes(),
          getPagos(),
          getDeudores(),
          getMembresias()
        ]);

        const totalSocios = sociosData.length;
        const totalDeportes = deportesData.length;
        const totalMembresias = membresiasData.length; 

        const hoy = new Date();
        const mesActual = hoy.getMonth() + 1; 
        const anioActual = hoy.getFullYear();

        const totalPagosMes = pagosData.filter(pago => {
          return pago.cuota_mes === mesActual && pago.cuota_anio === anioActual;
        }).length; 
        
        const deudaTotal = deudoresData.reduce((total, membresia) => {
          return total + (Number(membresia.cuota_mensual) || 0);
        }, 0);

        setStats({
          totalSocios,
          totalDeportes,
          totalPagosMes,
          deudaTotal,
          totalMembresias 
        });

      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        setError('No se pudieron cargar las estadísticas');
      } finally {
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []); 

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-4 text-gray-600">Cargando estadísticas...</p>
      </div>
    );
  }

  if (error) {
    return (
       <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
         <strong className="font-bold">Error:</strong>
         <span className="block sm:inline"> {error}</span>
       </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Socios</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalSocios}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Deportes Activos</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalDeportes}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Membresías</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalMembresias}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pagos del Mes</p>
              <p className="text-2xl font-semibold text-gray-900">{stats.totalPagosMes}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Deuda Pendiente (Este Mes)</p>
              <p className="text-2xl font-semibold text-gray-900">
                ${stats.deudaTotal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;