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
app.get('/', (req, res) => {
    res.render("inicio");
});

// Ruta adicional para demostrar otro mensaje
app.get("/hola/", (req, res) => {
    res.render();
});

// Custom 404 page - Esto debe ser el último middleware de rutas que no se encontraron
app.use((req, res) => {
    res.status(404).render('404');
});

// Custom 500 page - Middleware para manejar errores internos
app.use((err, req, res, next) => {
    res.status(500).render('500');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}; press Ctrl-C to terminate`);
});
