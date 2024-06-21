import jwt from 'jsonwebtoken'

const generateTokenAdmin=(adminId)=>{
   const token=jwt.sign({adminId},process.env.ADMIN_JWT_SECRET_KEY ,{
    expiresIn:'30d'
   })
   return token
}
export default generateTokenAdmin