const mongoose = require('mongoose');

const grupoSchema = mongoose.Schema({
   Asignatura:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Asignaturas",
    required:true
   },
   Numero:{
    type:Number,
    required:true
   },
   Dias:[{
    type:String,
    required:true
   }],
   Horario: {
    type: String,
    required:true
    },
   Cupos: {
    type: Number,
    required:true
    },
   Edificio: {
    type: String,
    required:true
   },
   Salon: {
    type: String,
    required:true
   },
   IDProfesor: {
    type: String,
    required:true
   },
   IDEstudiantes: [{
    type: Number,
    required:true
   }]
  
});

module.exports = mongoose.model('Grupos',grupoSchema);