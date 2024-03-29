const { StatusCodes } = require("http-status-codes");
const User = require("../models/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signUp= async (req, res) =>{
    try{
    const {fullname,email,password,contactnumber} =req.body;
    if(!fullname || !email || !password || !contactnumber){
        return res.status(StatusCodes.BAD_REQUEST).json({
            message: "Please Provide Required Information",
         }); 
    }

    const hash_password = await bcrypt.hash(password, 10);
    const userData= {
        fullname,
        email,
        hash_password,
        contactnumber
    }

    const user = await User.findOne({ email });
      if (user) {
         return res.status(StatusCodes.BAD_REQUEST).json({
            message: "User already registered",
         });
      } else {
         User.create(userData).then((data, err) => {
         if (err) res.status(StatusCodes.BAD_REQUEST).json({ err });
         else
           res
            .status(StatusCodes.CREATED)
            .json({ message: "User created Successfully" });
         });
      }
   }
   catch(err){
    res.status(500).json({ message: err+"" });
   }

}

const signIn = async (req, res) => {
    try {
       if (!req.body.email || !req.body.password) {
          res.status(StatusCodes.BAD_REQUEST).json({
             message: "Please enter email and password",
          });
       }
   
       const user = await User.findOne({ email: req.body.email });
      
       if (user) {
        
        const isMatched=await bcrypt.compare(req.body.password,user.hash_password);
       if (isMatched) {
        const payload={ _id: user._id, email: user.email };
             const token = jwt.sign(
                payload,
                process.env.JWT_SECRET,{ expiresIn: "30d"});
    const { _id, fullname,contactnumber,email } = user;
    res.status(StatusCodes.OK).json({
         token,
         user: {_id, fullname,contactnumber,email},
    });
   } else {
    res.status(StatusCodes.UNAUTHORIZED).json({
       message: "Invalid Credentials !",
    });
   }
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({
        message: "User does not exist..!",
    });
  }
  } catch (err) {
     
     res.status(StatusCodes.BAD_REQUEST).json({ Error:err+"" });
    
    }
  };
  module.exports = { signUp, signIn};