
import './componentStyling/Room.css';
import {React, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function Assessment({ assessment }) {
    const user= JSON.parse(localStorage.getItem("currentUser"));
    const [file,setfile] =useState(null);
    const [filename,setfilename] = useState('Choose File');
    const navigate= useNavigate();
    
    useEffect(()=>{},[assessment]);
    async function submit(e){

        e.preventDefault();
        
        const submission={
             assessmentId : assessment._id,
             assessmentTitle: assessment.title,
             studentId : user._id,
             sentfile: file,
             mentorId:assessment.mentorId
             

        }
        try {
            const resp = await axios.post('/api/submission/submit',submission);
            alert("Submitted Successfully");
            navigate('/home');
            
        } catch (error) {
            return JSON.parse({error});
        }
        
    }
    const fileType = ['application/pdf'];

    const change= e=>{

        let selectedFile = e.target.files[0];
        if (selectedFile && fileType.includes(selectedFile.type)) {
            let reader =new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend=(e)=>{
                setfile(e.target.result);
            }
        } else {
            console.log("Please Select a Valid PDF File");
        }
      
    }

    async function clear(){
        const assessId = assessment._id;
        try {
            const resp = await axios.post('/api/assessment/removeAssessment',assessId);
        } catch (error) {
            console.log(error);
        }

    }


    return (
  

    <div className='row bs'>

       
        <div className='col-md-7 text-start mt-4 ms-4'>
            <p style={{ fontWeight: 'bolder', fontSize: '25px' }}>{assessment.title}</p>
            <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{assessment.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{assessment.mentorName}</p>
            <form onSubmit={submit}> 
                <div className='custom-file'>
                <input type='file' className='custom-file-input mt-3' id='customFile' onChange={change}></input>
              


                </div>
                <input  type='submit' value='Upload Pdf'  className='btn btn-secondary mb-3 ms-1 mt-5' onSubmit={submit}></input>
                {
                user.isAdmin?(
                <>
                <button className='btn btn-secondary ms-5 mt-5 mb-3' onClick={clear} >Delete</button>
                </>):(
                    <></>
                )
                }
            </form>
          
        </div>
      




    </div>

    );
}

export default Assessment;