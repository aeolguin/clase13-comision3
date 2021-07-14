//Modulos requeridos
const express = require('express');
const app = express();
require('dotenv').config();
const dbPaises = require('./db/db')

//configuramos nuestro servidor
app.use(express.json())


//Iniciamos nuestro servidor
app.listen(process.env.PORT , ()=> {
    console.log(`servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`)
})

//Iniciamos el endpoint
app.get('/', (req, res)=> {
    //Si llegamos hasta aca: Creamos una respuesta como OK
    dbPaises.Respuesta = {
        codigo: 200,
        error: true,
        mensaje: 'Punto de inicio'
    }
    res.send(dbPaises.Respuesta);
})

//Creamos una respuesta con datos de nuestra base de datos

app.get('/pais', (req, res)=> {
    //Si llegamos hasta aca, respondemos lo que nos solicitan

    res.send(dbPaises.Paises)
})

app.post('/pais', (req, res)=> {

    if(!req.body.nombre || !req.body.codigo_pais) {
        dbPaises.Respuesta = {
            codigo : 502,
            error: true,
            mensaje: 'El campo de Nombre o Codigo de pais deben existir para poder darlo de alta en la DB'
        };
    }else {
        dbPaises.nuevoPais(req.body.nombre, req.body.codigo_pais)

        dbPaises.Respuesta = {
            codigo: 200,
            error: false,
            mensaje: ' Pais creado correctamente',
            respuesta: dbPaises.Paises
        };
    }
    res.send(dbPaises.Respuesta)
})

app.delete('/pais/:nombre', (req,res)=> {
    let nombrePais = req.params.nombre

    if (dbPaises.borrarPais(nombrePais)){
        dbPaises.Respuesta = {
            codigo: 200,
            error:false,
            mensaje: 'Pais eliminado correctamente de la DB'
        }
    }else {
        dbPaises.Respuesta = {
            codigo: 502,
            error:true,
            mensaje: 'El pais que intenta eliminar no existe en la DB'
        }
    }

    

   

    res.send(dbPaises.Respuesta)
})