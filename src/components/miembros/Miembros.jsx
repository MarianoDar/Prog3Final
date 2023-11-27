import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Miembros() {
    const [isVisible, setIsVisible] = useState(true);
    const [iva, setIva] = useState(0);
    const [ingresos, setIngresos] = useState(0);
    const [combustibles, setCombustibles] = useState(0);
    const [resultadoIva, setResultadoIva] = useState(0);
    const [resultadoIngresos, setResultadoIngresos] = useState(0);
    const [resultadoCombustibles, setResultadoCombustibles] = useState(0);

    const handleIvaChange = (e) => {
        setIva(e.target.value);
    }

    const handleIngresosChange = (e) => {
        setIngresos(e.target.value);
    }

    const handleCombustiblesChange = (e) => {
        setCombustibles(e.target.value);
    }

    const handleIvaClick = () => {
        setResultadoIva(iva * 1.21);
    }

    const handleIngresosClick = () => {
        setResultadoIngresos(ingresos * 1.06);
    }

    const handleCombustiblesClick = () => {
        setResultadoCombustibles(combustibles * 1.38);
    }

    return (
        <div className="contenedor_miembros">

            {/*<div className="integrantes">
                {isVisible && <ul>
                    <li>Daruich Mariano</li>
                    <li>Saleme Santiago</li>
                    <li>Lopez Stefania</li>
                </ul>}
            </div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Ocultar Miembros' : 'Mostrar Miembros'}
            </button>
            <br></br>
            {}*/}
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
                <h1 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>¡Calculá con nuestra calculadora digital!</h1>
                <br></br>
                <div style={{ marginTop: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>IVA: </label>
                    <input type="miembros-number" value={iva} onChange={handleIvaChange} style={{ marginBottom: '10px', padding: '5px' }} />
                    <button onClick={handleIvaClick} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 16px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', marginBottom: '10px', cursor: 'pointer' }}>Calcular</button>
                    <p style={{ marginBottom: '15px' }}>Resultado: {resultadoIva}</p>

                    <label style={{ display: 'block', marginBottom: '5px' }}>Ingresos Brutos: </label>
                    <input type="miembros-number" value={ingresos} onChange={handleIngresosChange} style={{ marginBottom: '10px', padding: '5px' }} />
                    <button onClick={handleIngresosClick} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 16px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', marginBottom: '10px', cursor: 'pointer' }}>Calcular</button>
                    <p style={{ marginBottom: '15px' }}>Resultado: {resultadoIngresos}</p>

                    <label style={{ display: 'block', marginBottom: '5px' }}>Combustibles: </label>
                    <input type="miembros-number" value={combustibles} onChange={handleCombustiblesChange} style={{ marginBottom: '10px', padding: '5px' }} />
                    <button onClick={handleCombustiblesClick} style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '8px 16px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '14px', marginBottom: '10px', cursor: 'pointer' }}>Calcular</button>
                    <p style={{ marginBottom: '15px' }}>Resultado: {resultadoCombustibles}</p>

                    <Link to='/home' style={{ color: '#3498db', textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}>Regresar</Link>
                </div>
            </div>
        </div>

            );
}