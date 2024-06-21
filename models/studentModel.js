import mongoose, { Schema } from "mongoose";

const studentSchema=new mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    admin_id:{
        type:Schema.Types.ObjectId,
        ref:'admins'
    }
})

export const Student=mongoose.model('students',studentSchema)