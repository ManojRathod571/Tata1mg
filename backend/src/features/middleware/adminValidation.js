require("dotenv").config()
const jwt=require("jsonwebtoken")
const {UserModel}=require('../auth/auth.model')

const adminValidation=async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    try {
       
        var decoded = jwt.verify(token,process.env.SECRET_KEY);
       // console.log(decoded);
        if(decoded){
            let id=decoded.userId;
           let user= await UserModel.find(  { $and: [{_id:id},{role:"admin"}] })
          // console.log(user);
           if(user.length>0){
           
            next()
           }
           else 
           res.send({"msg":"Not authorised"})
        }
        else{
            res.send({"msg":"Not authorised"})
        }
      
       
    } catch (error) {
        console.log(error);
        res.send({"msg":"Not authorised"})
    }
}

module.exports={adminValidation}