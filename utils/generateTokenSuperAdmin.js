import jwt from 'jsonwebtoken'

const generateTokenSuperAdmin=(superAdminId)=>{
   const token=jwt.sign({superAdminId},process.env.SUPER_ADMIN_JWT_SECRET_KEY ,{
    expiresIn:'30d'
   })
   return token
}
export default generateTokenSuperAdmin