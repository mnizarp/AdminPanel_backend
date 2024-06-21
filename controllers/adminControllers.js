import { Admin } from "../models/adminModel.js"
import { Student } from "../models/studentModel.js"
import generateTokenAdmin from "../utils/generateTokenAdmin.js"


export const admin_Login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const admin=await Admin.findOne({email,isSuperAdmin:false})
        if(admin){
           if(admin.password === password){
            const token=generateTokenAdmin(admin._id)
            console.log('admin login successfull')
            res.status(200).json({
                name:admin.name,
                email:admin.email,
                token
            })
           }else{
            res.status(402).json({message:'incorrect password'})
           }
        }else{
            res.status(404).json({message:'admin not found'})
        }
    } catch (error) {
        res.status(400).json({message:'admin login failed'})
    }
}

export const create_student=async(req,res)=>{
    try {
        const adminId=req.adminId
        const {studentname,age,subject}=req.body
        const newstudent=new Student({
            studentname,
            age,
            subject,
            admin_id:adminId
        })
        await newstudent.save()
        res.status(200).json({message:'student created successfully'})
    } catch (error) {
        res.status(400).json({message:'student creation failed'})
    }
}

export const get_students=async(req,res)=>{
    try{
       const adminId=req.adminId
       const students=await Student.find({admin_id:adminId})
       res.status(200).json({students})
    }catch(error){
        console.log(error)
        res.status(400).json({message:'students fetching failed'})
    }
}

