import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Pie() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="pie">
      <p>© 2023 - Todos los derechos reservados</p>
      {}
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
}
