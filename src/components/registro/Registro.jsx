import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default function Registro() {
  const [users, setUsers] = useLocalStorage('users', []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alert, setAlert] = useState({ show: false, variant: '', message: '' });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { email, password };

    const isUserAlreadyRegistered = users.some((user) => user.email === newUser.email);

    if (isUserAlreadyRegistered) {
      setAlert({ show: true, variant: 'danger', message: '¡El usuario ya está registrado!' });
    } else {
      setUsers([...users, newUser]);

      setEmail('');
      setPassword('');

      setAlert({ show: true, variant: 'success', message: '¡Registro exitoso!' });

      setTimeout(() => {
        navigate('/');
      }, 3000);
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