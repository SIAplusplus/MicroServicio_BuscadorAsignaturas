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
