import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js'
import adminRouter from './routes/adminRoutes.js'
import superAdminRouter from './routes/superAdminRoutes.js'

const app=express()
dotenv.config()
connectDb()
app.use(cors())
app.use(express.json())

app.use('/api/admin/',adminRouter)
app.use('/api/superadmin/',superAdminRouter)

app.get('/',(req,res)=>{
    res.send('hi')
})



const port=process.env.PORT || 2500
app.listen(port,()=>{
    console.log(`server connected on port ${port}`)
})