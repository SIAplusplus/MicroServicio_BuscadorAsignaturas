const mongoose = require('mongoose');

const programaSchema = mongoose.Schema({
   Id_programa:{
      type:Number,
      required:true
   },
   Nombre:{
    type:String,
    required:true
   },
   Facultad:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Facultades",
      required:true
   },
   Sede:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Sedes",
      required:true
   }
});

module.exports = mongoose.model('Programas',programaSchema);