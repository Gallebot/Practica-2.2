import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configurar Handlebars como motor de plantillas
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Ruta principal que muestra una página inicial renderizada
app.get('/', (req, res) => res.render("inicio"));

// Ruta adicional para demostrar otro mensaje
app.get("/hola/", (req, res) => {
    res.type('text/plain');
    res.send('Hola Bienvenido a Hola');
});

// Custom 404 page - Esto debe ser el último middleware de rutas que no se encontraron
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);  // Código correcto para "No Encontrado"
    res.send('404 - Not Found');
});

// Custom 500 page - Middleware para manejar errores internos
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}; press Ctrl-C to terminate`);
});
