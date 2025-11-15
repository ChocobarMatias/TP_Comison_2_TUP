import React, { useState } from 'react';
import Alumnos from '../Components/Alumnos/Alumnos';
import Libros from '../Components/Libros/Libros';
import Prestamos from '../Components/Prestamos/Prestamos';

const AdminPage = () => {
  const [selected, setSelected] = useState('alumnos');

  let content = null;
  if (selected === 'alumnos') content = <Alumnos />;
  else if (selected === 'libros') content = <Libros />;
  else if (selected === 'prestamos') content = <Prestamos />;

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 220, background: '#222', color: '#fff', padding: 24 }}>
        <h3>Panel Admin</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
          <button onClick={() => setSelected('alumnos')} style={{ color: '#fff', background: 'none', border: 'none', textAlign: 'left', padding: 0, fontSize: 16, cursor: 'pointer' }}>Alumnos</button>
          <button onClick={() => setSelected('libros')} style={{ color: '#fff', background: 'none', border: 'none', textAlign: 'left', padding: 0, fontSize: 16, cursor: 'pointer' }}>Libros</button>
          <button onClick={() => setSelected('prestamos')} style={{ color: '#fff', background: 'none', border: 'none', textAlign: 'left', padding: 0, fontSize: 16, cursor: 'pointer' }}>Préstamos</button>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32, background: '#f7f7f7' }}>
        {content}
      </main>
    </div>
  );
};

export default AdminPage;