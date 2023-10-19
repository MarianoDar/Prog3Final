import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

export default function Pie() {
    return (
        <div className="pie">
          <p>© 2023 - Todos los derechos reservados</p>
          <a href="/registro">Regístrate<FaArrowRight /></a> {}
          <a href="/login">Iniciar Sesion<FaArrowRight /></a> {}
        </div>
      );
}
