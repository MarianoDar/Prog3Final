import React from 'react'
import './galeria.css'
import { Link } from 'react-router-dom';

export default function Galeria() {
  return (

    <div className="gal_contenedor">
      <div className='gal_section'>
        <img src="Auditoria.jpg" className="gal_img" />
        <img src="Economia.jpg" className="gal_img" />
        <img src="Impuestos.jpg" className="gal_img" />
        <img src="Mercado.jpg" className="gal_img" />
        <img src="Tributacion.jpg" className="gal_img" />
      </div>
      <div className='gal_back'>
        <Link to="/home"><button>Menú</button></Link>
      </div>
    </div>
  )
}