import React from 'react';
import '../components/componentStyling/Room.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {

    const navigate=useNavigate();



    const[email,setemail]=useState('');
   
    const[password, setpassword] = useState('');

    function GoHome(){
        navigate("/home");
    }
   

     async function Login(){
       
        const user={
            email,  password

        }
        
        try{
        const result=  await axios.post('/api/user/login',user);
        const resultData= result.data;
        
        localStorage.setItem("currentUser",JSON.stringify(resultData));
        GoHome();

        }
        catch(error)
        {
            alert(error);
        }
    

    }



    return (
        <div >

           

                <div className='row justify-content-center mt-5'>
                    <div className='col-md-4'>


                    <h1 className='mt-5'>Login</h1>
                    <input type='text' className='form-control mt-5' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)}/>                      
                   
                    <input type='text' className='form-control mt-3' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)}/> 
                  
                    <button className='btn btn-primary mt-4'  onClick={Login}>Login</button>



                    


                </div>
            </div>
        </div>
    );
}
