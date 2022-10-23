const express = require('express');
const Sede = require('../models/sede');
const router =express.Router();
//const Grupo = require('../models/sede');

//get back all the sedes
router.get('/', async (req,res)=>{
    try{
        const sedes = await Sede.find();
        res.json(sedes);
    } catch(err) {
        res.json({message:err});
    }
});

//add a sede
router.post('/', async (req,res)=>{
    const sede = new Sede({
        
        Nombre:req.body.Nombre,
        Id_sede: req.body.Id_sede
    });    
    try{
        const savedSede = await sede.save();
        res.json(savedSede);
    } catch(err) {
        res.json({message:err});
    }
});

//get a specific sede
router.get('/:sedeID', async (req,res)=>{
    try{
        const sede = await Sede.findById(req.params.sedeID);
        res.json(sede);
    } catch(err) {
        res.json({message:err});
    }    
});

//remove a post 
router.delete('/:sedeId', async (req,res)=>{
    try{
        const removedSede = await Sede.remove({_id: req.params.sedeId});
        res.json(removedSede);
    } catch(err) {
        res.json({message:err});
    }    
});

//update a post 
router.patch('/:sedeId', async (req,res)=>{
    try{
        const updatedSede = await Sede.updateOne(
            {_id: req.params.sedeId},
            {$set:{
                Id_sede: req.body.Id_sede,
                Nombre: req.body.Nombre
            }

            }            
        );
        res.json(updatedSede);
    } catch(err) {
        res.json({message:err});
    }    
});



module.exports = router;
