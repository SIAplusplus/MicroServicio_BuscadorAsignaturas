const mongoose = require('mongoose');

const sedeSchema = mongoose.Schema({
   Nombre:{
    type:String,
    required:true
   },
   Id_sede:{
    type:Number,
    required:true
   }
});

module.exports = mongoose.model('Sedes',sedeSchema);