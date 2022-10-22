const mongoose = require('mongoose');

const facultadSchema = mongoose.Schema({
    Id_facultad:{
        type:Number,
        required:true
    }, 
   Nombre:{
        type:String,
        required:true
   },
   Sede:{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Sedes",
      required:true
    }
});

module.exports = mongoose.model('Facultades',programaSchema);