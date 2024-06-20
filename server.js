import dotenv from 'dotenv';
import connectDB from './src/lib/db.js';
import express from 'express';
import RegistroUsuario from './src/models/user.js';
import cors from 'cors';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

// Conexión a la base de datos
connectDB();

// Middleware para procesar JSON en las solicitudes
app.use(express.json());

// Habilitar CORS (puedes personalizar las opciones según tu entorno)
app.use(cors());

// Ruta para manejar el registro de usuarios
app.post('/api/usuarios', async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        // Ejemplo: Guardar el usuario en la base de datos
        const nuevoUsuario = new RegistroUsuario({ nombre, email, password });
        await nuevoUsuario.save();

        // Respuesta exitosa
        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error al registrar usuario:', error); 
        if (error.code === 11000) { // Verifica si es un error de correo duplicado
            res.status(409).json({ 
                error: 'duplicate_email', 
                mensaje: 'Este correo electrónico ya está registrado. Por favor, utiliza otro.' 
            });
        } else {
            res.status(500).json({ 
                error: 'server_error', 
                mensaje: 'Error al registrar usuario. Inténtalo de nuevo más tarde.' 
            });
        }
    }
});



// Ruta para manejar el inicio de sesión de usuarios
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Datos recibidos:", req.body);  // Añadir registro para ver los datos recibidos

        // Verifica si los campos email y password están presentes
        if (!email || !password) {
            return res.status(400).json({ mensaje: 'Faltan credenciales' });
        }

        // Busca el usuario por email en la base de datos
        const usuario = await RegistroUsuario.findOne({ email });

        // Si no encuentra el usuario, devuelve un error
        if (!usuario) {
            return res.status(400).json({ mensaje: 'Usuario no encontrado' });
        }

        // Compara la contraseña ingresada con la almacenada en la base de datos
        const isMatch = await usuario.comparePassword(password);

        // Si las contraseñas no coinciden, devuelve un error
        if (!isMatch) {
            return res.status(400).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Si las credenciales son correctas, devuelve un mensaje de éxito
        res.status(200).json({ mensaje: 'Inicio de sesión exitoso' });

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ mensaje: 'Error al iniciar sesión' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
