const mongoose =require('mongoose');

const submissionSchema = mongoose.Schema({

    assessmentId:{
        type:String,
        required:true
    },

    assessmentTitle:{
        type:String,
        required:true
    },

    studentId:{
        type: String,
        required:true
    },
    
    file:{
        type:mongoose.SchemaTypes.Mixed,
        required:true
    },

    mentorId:{
        type:String,
        required:true

    },

    submittedAt:{
        type:Date,
        
        default: Date.now()
    },
    grade:{

        type:String,
        default:"Not given Yet"
    },
    gradeComment:{
        type:String,
        default:"No Comments Yet"
    }


}

);

const submissionModel = mongoose.model("submissions",submissionSchema);

module.exports=submissionModel;