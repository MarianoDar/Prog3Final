import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Reemplaza la URL con la dirección de tu servidor
      const response = await axios.get(`http://localhost:3000/registro${email}`);
      if (response.data) {
        alert('El usuario ya está registrado');
        return;
      }
    } catch (error) {
      console.error(error);
      alert('No se pudo registrar el usuario');
    }

    try {
      // Reemplaza la URL con la dirección de tu servidor
      await axios.post(`http://localhost:3000`, { email, password });
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-secondary'>
      <div className='p-3 bg-red w-25'>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Ingrese Email' className='form-control'
            onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='mb-2'>
            <label htmlFor="password">Contraseña</label>
            <input type="password" placeholder='Ingrese Contraseña' className='form-control' 
                    onChange={e => setPassword(e.target.value)} />
          </div>
          <button className='btn btn-success'>Ingresar</button>
        </form>
      </div>
    </div>
  )
}
