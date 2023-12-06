import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    } else {
      alert('Credenciales inválidas');
      window.location.reload();
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
            <label htmlFor="password" className='form-label'>Contraseña</label>
            <input type="password" placeholder='Ingrese Contraseña' className='form-control' onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className='btn btn-success w-100'>Ingresar</button>
        </form>
        <p className='mt-3 text-center'>¿No tienes una cuenta? <Link to="/registro" className='link-primary'>Regístrate</Link></p>
      </div>
    </div>
  );
}