import React, { useEffect, useState } from 'react'
import { Worker } from '@react-pdf-viewer/core';

import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


export default function ViewSubmission({ submission }) {
    const navigate =useNavigate();
    const [grade, setgrade] = useState('');
    const [gradeComment, setgradeComment] = useState('');
    const [isView,setisView] =useState(false);
    const goToView=()=>{
       setisView(true);

    }


    async function commitGrade(){
        const submissionId = submission._id;
        const grading ={
            submissionId, grade, gradeComment
        }
        try {
        const resp = await axios.post("/api/submission/submitGrade",grading);
        navigate("/viewSubmission");
            
        } catch (error) {
            console.log("Got an error 2");
        }

    }

    const clear=()=>{

    }
    
    const turnOffView=()=>{
        setisView(false);
    }
    useEffect(()=>{

    },[isView]);



    return (
       <>
            {
            isView? (
                <div className='row'>
                

                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">

                <Viewer fileUrl={submission.file} />
               
                </Worker>

                <button className='btn btn-secondary mt-5 '  style ={{fontWeight:'bold'}} onClick={turnOffView}>Get Back To Grade The Submission</button>
                <p className='mt-5'></p>
             
                </div>

            

                



            ) : (
                <div className='row bs'>
            <div className='col-md-7 text-start mt-4 ms-4'>
                <p style={{ fontWeight: 'bolder', fontSize: '25px' }}>{submission.assessmentTitle}</p>
                <input type='text' className='form-control mt-5' placeholder='Grade the Submission' value={grade} onChange={(e) => setgrade(e.target.value)} />
                <input type='text' className='form-control mt-3' placeholder='Add Comment' value={gradeComment} onChange={(e) => setgradeComment(e.target.value)} />
                <div>
                <button className='btn btn-secondary me-auto mt-5' onClick={goToView}>View File</button>
                <button className='btn btn-secondary ms-4 mt-5' onClick={commitGrade}>Commit Grade</button>
                </div>
            

            </div>
            </div>

            )

            }

        </>
    );

}
