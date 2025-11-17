import { Link } from 'react-router-dom'; 
import { GoPencil, GoTrash, GoRepo } from 'react-icons/go'; 

const SocioCard = ({ socio, onDelete, onEdit }) => {
  const { idSocio, nombre, apellido, dni, email, telefono } = socio;

  const handleDelete = () => {
    onDelete(idSocio);
  };

  const handleEdit = () => {
    onEdit(socio);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{nombre} {apellido}</h3>
        <p className="text-sm text-gray-500 mt-1">DNI: {dni}</p>
        
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-700">
            <strong>Email:</strong> {email}
          </p>
          <p className="text-sm text-gray-700">
            <strong>Teléfono:</strong> {telefono || 'No provisto'}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={handleEdit}
          className="flex-1 min-w-20 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 text-sm font-medium flex items-center justify-center gap-2"
        >
          <GoPencil /> Editar
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 min-w-20 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-200 text-sm font-medium flex items-center justify-center gap-2"
        >
          <GoTrash /> Eliminar
        </button>
        <Link
          to={`/membresias?socio_id=${idSocio}`} 
          className="w-full mt-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 text-sm font-medium flex items-center justify-center gap-2"
        >
          <GoRepo /> Gestionar Deportes
        </Link>
      </div>
    </div>
  );
};

export default SocioCard;