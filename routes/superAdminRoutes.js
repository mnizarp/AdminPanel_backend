import express from 'express'
import { create_admin, get_admins, get_students, super_admin_login } from '../controllers/superAdminControllers.js'
import { superAdminProtect } from '../middlewares/superAdminAuth.js'
const superAdminRouter=express.Router()


superAdminRouter.post('/superadminlogin',super_admin_login)
superAdminRouter.post('/createadmin',superAdminProtect,create_admin)
superAdminRouter.get('/getadmins',superAdminProtect,get_admins)
superAdminRouter.get('/getstudents/:adminId',superAdminProtect,get_students)

export default superAdminRouter