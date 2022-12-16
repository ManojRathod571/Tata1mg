const express = require("express");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("./auth.model");

module.exports = userRoute = express.Router();

userRoute.post("/signup", async (req, res) => {
  const { email, password, name, phonenumber, address, pincode, gender } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      res.send({"msg":"User already exits, Please try login"});
    } else {
      bcrypt.hash(password, 6, async (err, hashedPassword) => {
        await userModel.create({
          email,
          password: hashedPassword,
          name,
          phonenumber,
          address,
          pincode,
          gender,
        });
        res.status(200).send({"msg":"Sign up successfully"});
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(404).send({ err: "Sign up failed" });
  }
});

userRoute.post("/login", async (req, res) => {

  const {email,password}=req.body;
  try {
      const user =await userModel.find({email})
      const userData=await userModel.findOne({email}).select({"password":0,_id:0})
     // console.log(user);
     
      if(user.length>0){
          const hash_password=user[0].password
         
          bcrypt.compare(password, hash_password, function(err, result) {
              // result == 
             // console.log(password===hash_password,result);
              if(result){
                  var token = jwt.sign({ "userId": user[0]._id }, process.env.SECRET_KEY,{expiresIn:'24h'});
                  res.send({"msg":"login successfull","login":true,"token":token,"user":userData})
                 
              }
              else{
                res.status(404).send({"msg":"login fail","login":false})
              }
          });
      }
    
      else{
          res.send({"msg":"Please Signup first",})
      }
  } catch (error) {
      console.log(error)
  }
 
  // const { email, password } = req.body;
  // try {
  //   let user = await userModel.findOne({ email });
  //   if (!user) {
  //     return res.status(404).send("Please Signup first");
  //   } else {
  //     let match = await bcrypt.compare(password, user.password);
  //     if (match) {
  //       let token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
  //       return res.status(200).send({ token });
  //     } else {
  //       return res.status(404).send("invalid Password");
  //     }
  //   }
  // } catch (e) {
  //   res.status(404).send(e.message);
  // }
});


// loginrouter.post('/',async(req,res)=>{
//   const {email,password}=req.body;
//   try {
//       const user =await User_Model.find({email})
//       const userData=await User_Model.findOne({email}).select({"password":0,_id:0})
//      // console.log(user);
//       if(user.length>0){
//           const hash_password=user[0].password
         
//           bcrypt.compare(password, hash_password, function(err, result) {
//               // result == 
//              // console.log(password===hash_password,result);
//               if(result){
//                   var token = jwt.sign({ "userId": user[0]._id }, process.env.key,{expiresIn:'24h'});
//                   res.send({"msg":"login successfull","login":true,"token":token,"user":userData})
                 
//               }
//               else{
//                   res.send({"msg":"login fail","login":false})
//               }
//           });
//       }
    
//       else{
//           res.send({"msg":"something went wrong",})
//       }
//   } catch (error) {
//       console.log(error)
//   }
 
 
// })
