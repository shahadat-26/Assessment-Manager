import React from 'react';
import '../components/componentStyling/Room.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function RegisterScreen() {
    const navigate= useNavigate();

    const[username,setusername]=useState('');
    const[email, setemail]=useState('');
    const[password, setpassword] = useState('');
    const[cpassword, setcpassword] =useState('');
    const[mentorship,setmentorship]=useState(false);
    
    
     async function Register(){
        if(password==cpassword){

        const user ={
            username, email, password, mentorship
        }
       
        
        try{
        const result= await axios.post('/api/user/register',user);
        const resultData= result.data;
        
        localStorage.setItem("currentUser",JSON.stringify(resultData));
        navigate("/home");

        }
        catch(error)
        {
            alert(error);
        }
    }
    else{
        alert("Passwords didn't match");
    }
    

    }



    return (
        <div >

           

                <div className='row justify-content-center mt-5'>
                    <div className='col-md-4'>


                    <h1>Register</h1>
                    <input type='text' className='form-control mt-5' placeholder='Username' value={username} onChange={(e)=>setusername(e.target.value)}/>                      
                    <input type='text' className='form-control mt-3' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/> 
                    <input type='text' className='form-control mt-3' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/> 
                    <input type='text' className='form-control mt-3' placeholder='Confirm Password' value={cpassword} onChange={(e)=>setcpassword(e.target.value)}/> 
                    <input type='text' className='form-control mt-3' placeholder='Are you a mentor?(Yes/No)' onChange={(e)=>{if(e.target.value.toLowerCase()==='yes'){setmentorship(true)}}}/>
                    <button className='btn btn-primary mt-4'  onClick={Register}>Submit</button>



                    


                </div>
            </div>
        </div>
    );
}
