import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import Navbar from '../components/Navbar';
import ViewSubmission from '../components/ViewSubmission';

import { useState } from 'react';

export default function ViewSubmissionScreen() {
   
    const [submissions, setsubmissions] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
   
    
    
    const user= JSON.parse(localStorage.getItem("currentUser"));
   
    useEffect(async () => {
        try {
            setloading(true);
            let rdata;
            if(user.isMentor){
            const mentorId= user._id;
            rdata = await axios.post('/api/submission/getMentorSubmissions',mentorId);
            }
            const data=rdata.data;
            console.log(data);
            setsubmissions(data);
           
            setloading(false);

        }
        catch (error) {
            setloading(true);

            console.log(error);
        }

    }, []);
    
   

    return (
        <div>
            <Navbar />
            
            <div className='container'>

                <div className='row justify-content-center mt-3 '>
               
               
                    {
                        loading ? <h1>Loading...</h1> :
                            error ? <h1>Got An Error</h1> :
                                submissions.map(
                                    rm => {
                                       
                                        return  <div className='col-md-10'>

                                            <ViewSubmission submission={rm} />
                                        </div>
                                    }
                                )




                    }
                </div>




            </div>
        </div>
    );
}
