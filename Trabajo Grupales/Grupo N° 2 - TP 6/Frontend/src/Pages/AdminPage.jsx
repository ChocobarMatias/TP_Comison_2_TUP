
import React, { useState } from 'react';
import Alumnos from '../Components/Alumnos/Alumnos';
import Libros from '../Components/Libros/Libros';
import Prestamos from '../Components/Prestamos/Prestamos';
import '../Styles/AdminPage/AdminPage.css';

const AdminPage = () => {
  const [selected, setSelected] = useState('alumnos');

  let content = null;
  if (selected === 'alumnos') content = <Alumnos />;
  else if (selected === 'libros') content = <Libros />;
  else if (selected === 'prestamos') content = <Prestamos />;

  return (
    <div className="adminpage-container">
      <aside className="adminpage-sidebar">
        <h3>Panel Admin</h3>
        <nav className="adminpage-nav">
          <button onClick={() => setSelected('alumnos')} className="adminpage-btn">Alumnos</button>
          <button onClick={() => setSelected('libros')} className="adminpage-btn">Libros</button>
          <button onClick={() => setSelected('prestamos')} className="adminpage-btn">Préstamos</button>
        </nav>
      </aside>
      <main className="adminpage-main">
        {content}
      </main>
    </div>
  );
};

export default AdminPage;