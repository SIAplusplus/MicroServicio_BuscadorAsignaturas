const express = require('express');
const { isObjectIdOrHexString } = require('mongoose');
const router =express.Router();
const Facultad = require('../models/facultad');

//get back all the asignaturas
router.get('/', async (req,res)=>{
    try{
        const facultades = await Facultad.find();
        res.json(facultades);
    } catch(err) {
        res.json({message:err});
    }
});

//add a program
router.post('/', async (req,res)=>{
    const facultad = new Facultad({

        Id_facultad: req.body.Id_facultad,
        Nombre: req.body.Nombre,
        Sede: req.body.Sede

    });    
    try{
        const savedFacultad = await facultad.save();
        res.json(savedFacultad);
    } catch(err) {
        res.json({message:err});
    }
});

//get a specific facultad
router.get('/:facultadId', async (req,res)=>{
    try{
        const facultad = await Facultad.findById(req.params.facultadId);
        res.json(facultad);
    } catch(err) {
        res.json({message:err});
    }    
});

//get a specific facultades by sede
router.get('/:sedeId', async (req,res)=>{
    console.log(req.params.sedeId);
    try{        
        const facultades = await Facultad.find({Sede: req.params.sedeId});
        res.json(facultades);
    } catch(err) {
        res.json({message:err});
    }    
});

//remove a post 
router.delete('/:facultadId', async (req,res)=>{
    try{
        const removedFacultad = await Facultad.remove({_id: req.params.facultadId});
        res.json(removedFacultad);
    } catch(err) {
        res.json({message:err});
    }    
});

//update a post 
router.patch('/:facultadId', async (req,res)=>{
    try{
        const updatedFacultad = await Facultad.updateOne(
            {_id: req.params.facultadId},
            {$set:{
                Id_facultad: req.body.Id_facultad,
                Nombre: req.body.Nombre,
                Sede: req.body.Sede
            }

            }            
        );
        res.json(updatedFacultad);
    } catch(err) {
        res.json({message:err});
    }    
});



module.exports = router;