const express = require('express');
const router=express.Router();

const Assessment= require('../models/assessment');



router.post('/addingAssessment', async(req,res)=>{

const newAssessment =new Assessment({title:req.body.title, description:req.body.description, mentorId:req.body.mentorId, mentorName:req.body.mentorName, deadline:req.body.deadline});
try {
    const resp = await newAssessment.save();
    res.send("Assessment Added Successfully");
} catch (error) {
   return res.status(400).json({error});
}



});






router.get(
    '/getAllAssessments',
    async(req,res)=>
    {
        try{
            const rooms = await Assessment.find({});
            res.send(rooms);
        }
        catch(error){
           return res.status(400).json({message:error});
        }
    }
    
    );


     router.post("/removeAssessment",
     async(req,res)=>{
         const toBeRemoved = {_id:req.body.assessId};
         try {
             const response = await Assessment.findOneAndDelete({toBeRemoved});
             res.send(response);
            
         } catch (error) {
             console.log(error);
         }
         
     }
     
     
     );

module.exports=router;

