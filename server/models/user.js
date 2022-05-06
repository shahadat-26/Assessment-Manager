const mongoose= require('mongoose');

const userSchema = mongoose.Schema(

    {
        username:
        {
            type:String,
            required: true
        },
        email:
        {
            type:String,
            required: true
        },
        password:
        {
            type:String,
            required: true
        },
        isAdmin:
        {
            type:Boolean,
            default:false
            
        },

        isStudent:
        {
            type:Boolean,
            default:true
            
        },

        isMentor:
        {
            type:Boolean,
            default:false
            
        }
        
       

    }
);

const userModel = mongoose.model('users', userSchema);

module.exports=userModel;


