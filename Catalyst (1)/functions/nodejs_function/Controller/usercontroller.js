const catalyst = require("zcatalyst-sdk-node");

exports.testConnection = async(req, res)=>{
    try{
        res.status(200).json({success:true, message:"I am live!",data:"Hello", age:34, phone:978});
    }catch(error)
    {
        res.status(500).json({success: false, message: " I am busy!", error});  
    }
};
exports.createUser = async(req, res) =>{
    try{
const user= req.body;
const userData ={
    name: user.name,
    email: user.email,
    mobile: user.mobile
    
};
const catalystApp= catalyst.initialize(req, {scope: "admin"});
const userResult =await catalystApp
.datastore()
.table("users")
.insertRow(userData);
res
.status(200)
.json({
    success:true,
    message: "user successful message created",
    data:userResult,
});
    }catch(error){
        res
        .status(500)
        .json({success: true, message:"user successful message",error});
    }
};
// const userResult= await catalystApp.datastore().table("users").insertRow(userData);
// res.status(200).json({success: true, message:"user successful message", date:userResult});
//  }    catch(error){
//         res.status(500).json({success: false, message: "user not created", error});
//     }
// }
exports.getUser = async(req,res) =>{
    try{
        res.status(200).json({ success: true, message: "Get user successful"})
    }catch(error){
        res.status(500).json({success:false, message: "user not found", error});
    }
};
exports.getUser = async(req, res) =>{
    try{
        const user= req.body;
        const userData1 ={
            name: user.name,
            email: user.email,
        };


        const catalystApp= catalyst.getUser(req, {scope: "admin"});
        const userResult =await catalystApp
        .datastore()
        .table("users")
        .insertRow(userData1);
        res
        .status(200)
        .json({
            success:true,
            message: "user successful message created",
            data:userResult,
        });
            }catch(error){
                res
                .status(500)
                .json({success: true, message:"user successful message",error});
            }
        };
