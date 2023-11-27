import React from 'react'
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Barralat from '../barralat/Barralat';
import Pie from '../pie/Pie';
import './home.css';
import { Link } from 'react-router-dom'

export default function () {

    const opcionesPrincipales = [
        'Solución de carga impositiva',
        'IVA a liquidar',
        'Despreocupate de AFIP',
        'La mejor relación precio-calidad',
      ];
    
      const opcionesNoContamosCon = [
        'Problemas con el Estado',
        'Pérdida de dinero en impuestos',
        'Dinero "sucio"',
      ];
      
      return (
    <div className="container">
          <div className="header">
            <Header titulo={"Estudio Contable"} tituloo={"MARCHETTI CARLOS ALBERTO"} />
          </div>
          <div className="content">
            <h2>Haznos saber que nos visitaste!</h2>
          <Menu/>
          </div>
          <div className="barralat">
            <Barralat
              opcionesPrincipales={opcionesPrincipales}
              opcionesNoContamosCon={opcionesNoContamosCon}
            />
          </div>
          <div className="footer">
            <Link to = "/miembros">Calculadora</Link>
            <Pie />
          </div>
        </div>
      );
  
}