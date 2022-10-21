const express = require('express');
const router =express.Router();
const Asignatura = require('../models/asignatura');

//get back all the asignaturas
router.get('/', async (req,res)=>{
    try{
        const asignaturas = await Asignatura.find();
        res.json(asignaturas);
    } catch(err) {
        res.json({message:err});
    }
});

//add a program
router.post('/', async (req,res)=>{
    const asignatura = new Asignatura({

        Nombre: req.body.Nombre,
        Tipologia: req.body.Tipologia,
        Creditos: req.body.Creditos,
        Programas: req.body.Programas

    });    
    try{
        const savedAsignatura = await asignatura.save();
        res.json(savedAsignatura);
    } catch(err) {
        res.json({message:err});
    }
});

//get a specific program
router.get('/:asignaturaId', async (req,res)=>{
    try{
        const asignatura = await Asignatura.findById(req.params.asignaturaId);
        res.json(asignatura);
    } catch(err) {
        res.json({message:err});
    }    
});

//remove a post 
router.delete('/:asignaturaId', async (req,res)=>{
    try{
        const removedAsignatura = await Asignatura.remove({_id: req.params.asignaturaId});
        res.json(removedAsignatura);
    } catch(err) {
        res.json({message:err});
    }    
});

//update a post 
router.patch('/:asignaturaId', async (req,res)=>{
    try{
        const updatedAsignatura = await Asignatura.updateOne(
            {_id: req.params.asignaturaId},
            {$set:{
                Nombre: req.body.Nombre,
                Tipologia: req.body.Facultad,
                Creditos: req.body.Sede,
                Programas: req.body.Programas
            }

            }            
        );
        res.json(updatedAsignatura);
    } catch(err) {
        res.json({message:err});
    }    
});

router.post('/asignaturasInfo', async(req, res) => {
    courseList = req.body
    courseInfo = []
    try{
        for (const element of courseList){
            course = await Asignatura.findById(element.courseId)
            courseInfo.push(courseInfo)
        }
        res.json(courseInfo)
    } catch(err) {
        res.json({message:err})
    }
});

module.exports = router;
