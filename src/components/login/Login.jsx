import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export default function Login() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(`${API_BASE_URL}/login`, { email, contraseña });

      if (response.data.success) {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/home');
      } else {
        alert('Credenciales inválidas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión');
    }
  }

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-secondary'>
      <div className='p-3 bg-light w-25 rounded'>
        <h1 className='text-center mb-4'>¡Bienvenido!</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" placeholder='Ingrese Email' className='form-control' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="contraseña" className='form-label'>Contraseña</label> {/* Cambiado de 'password' a 'contraseña' */}
            <input type="password" placeholder='Ingrese Contraseña' className='form-control' onChange={e => setContraseña(e.target.value)} />
          </div>
          <button type="submit" className='btn btn-success w-100'>Ingresar</button>
        </form>
        <p className='mt-3 text-center'>¿No tienes una cuenta? <Link to="/registro" className='link-primary'>Regístrate</Link></p>
      </div>
    </div>
  );
}
