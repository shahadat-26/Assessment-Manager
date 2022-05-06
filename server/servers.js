const express = require('express');
const bodyParser= require('body-parser');
require('dotenv').config();
const app = express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



const dbConfig = require('./db');




  
const assessmentRoute = require('./routes/assessmentRoute');
const userRoute = require('./routes/userRoute');
const submissionRoute = require('./routes/submissionRoute');

app.use('/api/assessment', assessmentRoute);
app.use('/api/user', userRoute);
app.use('/api/submission', submissionRoute);



const port = process.env.PORT;
app.listen(port,() => {
        console.log(`Server Running at ${port} `);
    }
);


module.exports=app;