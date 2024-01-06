import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ show: false, variant: '', message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { email, password };

    try {
      const response = await axios.post(`${API_BASE_URL}/registro`, newUser);

      if (response.data.success) {
        setAlert({ show: true, variant: 'success', message: '¡Registro exitoso!' });

        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        setAlert({ show: true, variant: 'danger', message: '¡Error en el registro!' });
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      setAlert({ show: true, variant: 'danger', message: '¡Error en el registro!' });
    }
  };

  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-secondary'>
      <div className='p-3 bg-light w-25 rounded'>
        <h2 className='text-center mb-4'>¡Únete a nosotros!</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" placeholder='Ingrese Email' className='form-control' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor="password" className='form-label'>Contraseña</label>
            <input type="password" placeholder='Ingrese Contraseña' className='form-control' onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className='btn btn-success w-100'>Registrarme</button>
        </form>
        <p className='mt-3 text-center'>¿Ya tienes una cuenta? <Link to="/" className='link-primary'>Iniciar sesión</Link></p>
        {alert.show && (
          <Alert variant={alert.variant} onClose={() => setAlert({ ...alert, show: false })} dismissible>
            {alert.message}
          </Alert>
        )}
      </div>
    </div>
  );
}