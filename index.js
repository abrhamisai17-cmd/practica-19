
const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

const inicioRoute = require('./routes/inicioRoute');
const productosRoute = require('./routes/productosRoute');
const serviciosRoute = require('./routes/serviciosRoute');
const contactoRoute = require('./routes/contactoRoute');

app.set('view engine', 'ejs');

app.use('/contacto', contactoRoute);
app.use('/servicios', serviciosRoute);
app.use('/', inicioRoute);
app.use('/productos', productosRoute);

app.listen(port, ()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});