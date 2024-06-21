import express from 'express'
import { admin_Login, create_student, get_students } from '../controllers/adminControllers.js'
import { adminProtect } from '../middlewares/adminAuth.js'

const adminRouter=express.Router()

adminRouter.post('/adminlogin',admin_Login)
adminRouter.post('/createstudent',adminProtect,create_student)
adminRouter.get('/getstudents',adminProtect,get_students)

export default adminRouter