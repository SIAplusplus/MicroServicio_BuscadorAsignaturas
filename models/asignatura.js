const mongoose = require('mongoose');

const asignaturaSchema = mongoose.Schema({
   Nombre:{
    type:String,
    required:true
   },
   Tipologia:{
    type:String,
    required:true
   },
   Creditos:{
    type:Number,
    required:true
   },
   Programas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Programas"
    }
  ]
});

module.exports = mongoose.model('Asignaturas',asignaturaSchema);