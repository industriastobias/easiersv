const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors());
app.use(express.json());

// Base de datos simulada con contraseñas encriptadas
const users = [
    { id: '2005', clave: bcrypt.hashSync('admin2024', 10) },
    { id: '1001', clave: bcrypt.hashSync('viewer2024', 10) },
    { id: '1002', clave: bcrypt.hashSync('claveViewer2', 10) }
];

// Ruta para validar el inicio de sesión
app.post('/login', (req, res) => {
    const { id, clave } = req.body;
    const user = users.find(u => u.id === id);

    if (user && bcrypt.compareSync(clave, user.clave)) {
        res.json({ success: true, message: "Inicio de sesión exitoso" });
    } else {
        res.status(401).json({ success: false, message: "ID o contraseña incorrectos" });
    }
});

// Iniciar servidor en el puerto 3000
app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
