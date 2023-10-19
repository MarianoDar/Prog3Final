import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './menu.css'

export default function Menu() {
  const [Contador, setContador] = useState(0);
  const [BotonVisible, setBotonVisible] = useState(true);

  const incrementarContador = () => {
    setContador(Contador + 1);
  };

  useEffect(() => {
    if (Contador > 0) {
      setBotonVisible(false);
    }
  }, [Contador]);

  return (
    <div className="contenedor__">
      <div className="menu__contador">
        <h2>Visitas: {Contador}</h2>
        {BotonVisible ? (
          <button onClick={incrementarContador}>Visité este sitio</button>
        ) : (
          <h3>¡Gracias por visitar este sitio!</h3>
        )}
      </div>
      <div className="menu__imagenes">
        <Link to='/galeria' >
          <img className='imagen__menu' src='EconomiaMundial.jpg' alt="Economia" />
        </Link>
        <h3>Click en la imagen para ver la galeria!</h3>
      </div>
    </div>
  );
}


