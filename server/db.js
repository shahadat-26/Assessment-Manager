const mongoose = require('mongoose');
require('dotenv').config();
var url = process.env.MONGOOSEURL

var config =
{
    useUnifiedTopology:true,
    useNewUrlParser:true
}

mongoose.connect(url,config);

var connection=mongoose.connection; 

connection.on('error',

    ()=>{
        console.log("failed");
    }
);
connection.on('connected',
()=>{
    console.log("succeeded");
    
}



);

module.exports=mongoose;


