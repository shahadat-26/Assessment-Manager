const express = require('express');
const router= express.Router();
const submission= require('../models/submission');
const assessment = require('../models/assessment');
const fileUpload=require('../node_modules/express-fileupload');
const app=express();
app.use(fileUpload());


router.post("/submitGrade",async(req,res)=>{
    const filter={_id:req.body.submissionId};
    const update={grade:req.body.grade, gradeComment:req.body.gradeComment};
    try {
        const resp = await submission.findOneAndUpdate(filter,update,{new:true});
        res.send(resp);
    } catch (error) {
        return res.status(400).json({error});
    }
})







router.post("/submit",
    async (req,res)=>{
        

        const newSubmission=  new submission({ assessmentId: req.body.assessmentId, assessmentTitle:req.body.assessmentTitle, studentId:req.body.studentId, file:req.body.sentfile, mentorId:req.body.mentorId});
        
        try {
            const submission = await newSubmission.save();
            
           
            res.send(submission);
            
            
        } catch (error) {
            return res.status(400).json({error});
        }

    }





);

router.post("/getStudentSubmissions",
async(req,res)=>{
    const filter={studentId:req.body.studentId};
    try {
        const mySubmissions= await submission.find({filter});
       
        res.send(mySubmissions);
        
    } catch (error) {
        console.log(error);
    }

}
);
router.post("/getMentorSubmissions",
async(req,res)=>{
    const filter={mentorId:req.body.mentorId};
    try {
        const mySubmissions= await submission.find({filter});
       
        res.send(mySubmissions);
        
    } catch (error) {
        console.log(error);
    }

}
);








router.get("/getAdminSubmissions",
async(req,res)=>{

    try {
        const allSubmissions = await submission.find({});
        res.send(allSubmissions);
    } catch (error) {
        console.log(error);
        
    }
});

module.exports=router;