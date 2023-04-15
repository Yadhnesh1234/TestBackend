const User=require("../model/User")
const wifi = require('node-wifi');
wifi.init({
    iface: null 
  });
const getAllUsers=async(req,res,next)=>{
    let users;
    let dataNetworks;
    try{
        users=await User.find();
        wifi.scan((error, networks) => {
            if (error) {
              console.log(error);
            } else {
                console.log(networks)
return res.status(200).json({wifi_data: networks})

}})
    }catch(err){
        return next(err)
    }
    if(!users){
        return res.status(500).json({message:"Internal server error"})
}

}

const addUser=async(req,res,next)=>{
    const {name,email,password}=req.body;
    if(name==="$#")
      return res.status(422).json({msg:"Invalid Data"})
    
    let user;
    try{
    user=new User({
        name,email,password     
    })
    user= await user.save()
    }catch(err){
       return err(next) 
    }
    if(!user)
    return res.status(500).json({message:"Internal server error"})

    return res.status(201).json({user,msg:"User Created"})
}
const updateUser=async (req,res,next)=>{
     const id=req.params.id
     const {name,email,password} =req.body;
     let user
     try{
       user= await User.findByIdAndUpdate(id,{name,email,password})
     }catch(err){
        return err(next) 
     }
     if(!user)
     return res.status(500).json({message:"Internal server error"})

     return res.status(200).json({msg:"updated suucessfully"})
}
const deleteUser=async (req,res,next)=>{
    const id=req.params.id
    let user
    try{
      user= await User.findByIdAndRemove(id)
    }catch(err){
       return err(next)
    }
    if(!user)
    return res.status(500).json({message:"Internal server error"})

    return res.status(200).json({msg:"Deleted suucessfully"})
}
const getOneUser=async (req,res,next)=>{
    const id=req.params.id
    wifi.getCurrentConnections((error, currentConnections) => {
        if (error) {
          console.log(error);
        } else {
          console.log("My Networks : ",currentConnections);
        }})
    let user
    try{
      user= await User.findById(id)
    }catch(err){
       return err(next)
    }
    if(!user)
    return res.status(500).json({message:"Internal server error"})

    return res.status(200).json({user})
}
exports.getAllUsers=getAllUsers
exports.addUser=addUser
exports.updateUser=updateUser
exports.deleteUser=deleteUser
exports.getOneUser=getOneUser