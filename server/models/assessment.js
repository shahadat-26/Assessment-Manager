const mongoose=require('mongoose');

const assessmentSchema = mongoose.Schema(
    {
      
        
       title:
        {
            type:String,
            required:true
        },

        description:
        {
            type: String,
            required: true
        },
        mentorId:
        {
            type: String,
            required:true 
        },

        mentorName:{
            type:String,
            required:true
        },

        
        createdAt:
        {
            type:Date,

            default:Date.now()
            
        },
        deadline:
        {
            type:Date,
            required:true
        }

        
        
    }
    
    );

    const assessmentModel = mongoose.model('assessments',assessmentSchema);

    module.exports=assessmentModel;