const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

//middleware (functions, exp: asking for authntication for certain routess)
app.use(bodyParser.json());
//conections to databasenpm install dotenv to hide the password

mongoose.connect('mongodb+srv://classesdb:classesdb_22@cluster0.ajd8a2u.mongodb.net/test', ()=>
    console.log('connected to DB!')
);

//import routes

const programasRoute = require('./routes/programas');
app.use('/programas',programasRoute);

const asignaturasRoute = require('./routes/asignaturas');
app.use('/asignaturas',asignaturasRoute);

const gruposRoute = require('./routes/grupos');
app.use('/grupos',gruposRoute);

const sedesRoute = require('./routes/sedes');
app.use('/sedes',sedesRoute);

const facultadesRoute = require('./routes/facultades');
app.use('/facultades',facultadesRoute);

//Routes

app.get('/',(req,res)=>{
    res.send('Hellooooo');
});


//Listen to the server 
app.listen(3000);
