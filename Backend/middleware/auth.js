// const jwt = require("jsonwebtoken");

// const auth = (req,res,next) =>{
//     const token = req.header("Authorization");

//     if(!token){
//         return res.status(401).json({message:"No Token,Authorization Denied "});
//     }

//     try{
//         const decoded = jwt.verify(
//             token.replace("Bearer ", ""),
//             process.env.JWT_SECRET
//         );

//         req.user = decoded;
//         next();
//     }catch(err){
//         res.status(401).json({
//             message:"Invalid Token",
//         });
//     }
// };

// module.exports = auth;

const {requireAuth} = require("@clerk/express")

module.exports = requireAuth();