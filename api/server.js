import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/registro', (req, res) => {
  const { email, password } = req.body;

  const sql = 'INSERT INTO usuarios (email, contraseña) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error al insertar en la base de datos:', err);
      res.status(500).json({ success: false, message: 'Error al registrar el usuario' });
      return;
    }

    res.json({ success: true, message: 'Usuario registrado exitosamente' });
  });
});

app.post('/login', (req, res) => {
  const { email, contraseña } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND contraseña = ?';
  db.query(sql, [email, contraseña], (err, result) => {
    if (err) {
      console.error('Error al buscar en la base de datos:', err);
      res.status(500).json({ success: false, message: 'Error al intentar iniciar sesión' });
      return;
    }

    if (result.length > 0) {
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      res.json({ success: false, message: 'Credenciales inválidas' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});