import React from 'react'

export default function Header({titulo, tituloo}) {
    return (
        <div>
          <header className='cabecera'>
            <h1 style={{ textAlign: 'center' }}>{titulo}</h1>
            <h4 style={{ textAlign: 'center'} }>{tituloo}</h4>
          </header>
        </div>
      );
}