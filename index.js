const express = require('express');
const { dbconection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');


//console.log('Hola mundo');


//CODIGO PARA DESPLEGAR EL SERVIDOR
const server = express();

//CONFIGURANDO CORS
server.use(cors());

//PRIMERA PETICION GET
server.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Desplegando el primer servicios REST'
    });
});

dbconection();

//console.log(process.env);


server.listen(process.env.PORT, () => {
    console.log('El servidor se está ejecutando en el puerto: ' + process.env.PORT),
        console.log('Montenegro Posito Leyser Nilton')



});

//PRIMERA PETICION GET