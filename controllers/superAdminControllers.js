
import { Admin } from "../models/adminModel.js"
import { Student } from "../models/studentModel.js"
import generateTokenSuperAdmin from "../utils/generateTokenSuperAdmin.js"

export const super_admin_login=async(req,res)=>{
    try{
      const {email,password}=req.body
      const superAdmin=await Admin.findOne({email,isSuperAdmin:true})
      if(superAdmin){
        if(superAdmin.password==password){
            const token=generateTokenSuperAdmin(superAdmin._id)
    
            res.status(200).json({
                name:superAdmin.name,
                email:superAdmin.email,
                token
            })
        }else{
            res.status(403).json({message:'super admin login failed'})
        }
      }else{
        res.status(404).json({message:'super admin not found'})
      }
    }catch(error){
        res.status(400).json({message:'super admin login failed'})
    }
}

export const create_admin=async(req,res)=>{
    try{
       const {name,email,password}=req.body
       
       const newadmin=new Admin({
        name,
        email,
        password,
        isSuperAdmin:false
       })
       await newadmin.save()
       res.status(200).json({message:'admin creation success'})
    }catch(error){
        console.log(error)
        res.status(400).json({message:'admin creation failed'})
    }
}

export const get_admins=async(req,res)=>{
    try{
      const admins=await Admin.find({isSuperAdmin:false})
      res.status(200).json({admins})
    }catch(error){
        console.log(error)
        res.status(400).json({message:'fetching admins failed'})
    }
}


export const get_students=async(req,res)=>{
    try{
       const {adminId}=req.params
       const students=await Student.find({admin_id:adminId})
       res.status(200).json({students})
    }catch(error){
        console.log(error)
        res.status(400).json({message:'students fetching failed'})
    }
}


