const express = require('express');
const router =express.Router();
const Programa = require('../models/programa');

//get back all the programs
router.get('/', async (req,res)=>{
    try{
        const programas = await Programa.find();
        res.json(programas);
    } catch(err) {
        res.json({message:err});
    }
});

//add a program
router.post('/', async (req,res)=>{
    const programa = new Programa({

        Id_programa: req.body.Id_programa,
        Nombre: req.body.Nombre,
        Facultad: req.body.Facultad,
        Sede: req.body.Sede

    });    
    try{
        const savedPrograma = await programa.save();
        res.json(savedPrograma);
    } catch(err) {
        res.json({message:err});
    }
});

//get a specific program
router.get('/:programaId', async (req,res)=>{
    try{
        const programa = await Programa.findById(req.params.programaId);
        res.json(programa);
    } catch(err) {
        res.json({message:err});
    }    
});

//buscar programas por sede
router.get('/porsede/:sedeId', async (req,res)=>{
    try{        
        const programas = await Programa.find({Sede: req.params.sedeId});
        res.json(programas);
    } catch(err) {
        res.json({message:err});
    }    
});

//buscar programas por facultad
router.get('/porfacultad/:facultadId', async (req,res)=>{
    try{        
        const programas = await Programa.find({Facultad: req.params.facultadId});
        res.json(programas);
    } catch(err) {
        res.json({message:err});
    }    
});



//remove a post 
router.delete('/:programaId', async (req,res)=>{
    try{
        const removedPrograma = await Programa.remove({_id: req.params.programaId});
        res.json(removedPrograma);
    } catch(err) {
        res.json({message:err});
    }    
});

//update a post 
router.patch('/:programaId', async (req,res)=>{
    try{
        const updatedPrograma = await Programa.updateOne(
            {_id: req.params.programaId},
            {$set:{
                Id_programa: req.body.Id_programa,
                Nombre: req.body.Nombre,
                Facultad: req.body.Facultad,
                Sede: req.body.Sede
            }

            }            
        );
        res.json(updatedPrograma);
    } catch(err) {
        res.json({message:err});
    }    
});




module.exports = router;
