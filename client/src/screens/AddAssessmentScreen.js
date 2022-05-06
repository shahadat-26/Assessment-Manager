import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function AddAssessmentScreen() {
    const navigate= useNavigate();
    const user=JSON.parse(localStorage.getItem('currentUser'));
    const[title,settitle]=useState('');
    const[description, setdescription]=useState('');
    const[deadline,setdeadline]=useState(Date.now());
    const mentorId=user._id;
    const mentorName=user.username;
     async function Adding(){
        const newUser ={
            title, description, mentorId, mentorName, deadline
    }
        try{
        
        const response = await axios.post('/api/assessment/addingAssessment',newUser);
        console.log(response);
        navigate('/home');
        }
        catch(error){

            console.log(error);
        }


    }
  return (

    <div >

           

                <div className='row justify-content-center mt-5'>
                    <div className='col-md-4'>


                    <h1>Add an Assessment</h1>
                    <input type='text' className='form-control mt-5' placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)}/>                      
                    <input type='text' className='form-control mt-3' placeholder='Description' value={description} onChange={(e)=>setdescription(e.target.value)}/> 
                    <input type='text' className='form-control mt-3' placeholder='Deadline(YYYY-MM-DD)'  onChange={(e)=>setdeadline(new Date(e.target.value))}/>
                    <button className='btn btn-primary mt-4'  onClick={Adding}>Submit</button>



                    


                </div>
            </div>
        </div>
  )
}
