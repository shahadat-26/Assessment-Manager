import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import Navbar from '../components/Navbar';
import Assessment from '../components/Assessment';


import '../components/componentStyling/Room.css'



function HomeScreen() {


    
    const [assessments, setassessments] = useState([]);
    const [loading, setloading] = useState();
    const [error, seterror] = useState();
   
    
    


    useEffect(async () => {
        try {
            setloading(true);
            const rdata = await axios.get('/api/assessment/getAllAssessments');
            const data=rdata.data;
            console.log(data);
            setassessments(data);
           
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
                                assessments.map(
                                    rm => {
                                       
                                        return  <div className='col-md-10'>

                                            <Assessment assessment={rm} />
                                        </div>
                                    }
                                )




                    }
                </div>




            </div>
        </div>
    );
}

export default HomeScreen;






