import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  CreditCard, 
  ClipboardList 
} from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Socios', href: '/socios', icon: <Users size={20} /> },
    { name: 'Deportes', href: '/deportes', icon: <Trophy size={20} /> },
    { name: 'Membresías', href: '/membresias', icon: <ClipboardList size={20} /> },
    { name: 'Pagos', href: '/pagos', icon: <CreditCard size={20} /> }
  ];

  return (
    <>
      {open && (
        <div 
          className="fixed inset-0 flex z-40 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />
        </div>
      )}

      <div className={`
        fixed inset-y-0 left-0 flex flex-col z-50 w-64 bg-gray-900 text-white
        transform transition duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <span className="text-white text-xl font-bold">Club Social</span>
        </div>

        <nav className="flex-1 overflow-y-auto pt-5 pb-4">
          <div className="px-4 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end 
                className={({ isActive }) => `
                  group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }
                `}
                onClick={() => setOpen(false)}
              >
                <span className="mr-3">{item.icon}</span> 
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;