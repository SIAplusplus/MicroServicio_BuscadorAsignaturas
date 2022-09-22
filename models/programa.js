const mongoose = require('mongoose');

const programaSchema = mongoose.Schema({
   Nombre:{
    type:String,
    required:true
   },
   Facultad:{
    type:String,
    required:true
   },
   Sede:{
    type:String,
    required:true
   }
});

module.exports = mongoose.model('Programas',programaSchema);