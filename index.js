import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
const port = process.env.PORT || 3000;

app.engine('handlebars', engine({
    defaultLayout:'main',
    }));
    app.set('view engine', 'handlebars');
    
//Aquí agregamos las rutas
app.get("/", (req, res) => {
    res.type('text/plain')
    res.send('Hola Bienvenido')
});

app.get("/hola/", (req, res) => {
    res.type('text/plain')
    res.send('Hola Bienvenido a Hola')
});




//custom 404 page
app.use((req,res) => {
    res.type('text/plain')
    res.status(400)
    res.send('404 - Not Found')
})

//custom 500 page
app.use((err,req,res,next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port,() => console.log(`Express started on http://localhost: ${port}; ` + 
`press Ctrl-C to termiante` 
))



