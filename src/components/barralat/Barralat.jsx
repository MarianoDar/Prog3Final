import React from 'react'

export default function Barralat(props) {
  const { opcionesPrincipales, opcionesNoContamosCon } = props;

  return (
    <div>
      <h2>Mirá nuestras opciones:</h2>
      <ul>
        {opcionesPrincipales.map((opcion, index) => (
          <li key={index}>{opcion}</li>
        ))}
      </ul>
      <h3>No contamos con:</h3>
      <ul>
        {opcionesNoContamosCon.map((opcion, index) => (
          <li key={index}>{opcion}</li>
        ))}
      </ul>
    </div>
  )
}
