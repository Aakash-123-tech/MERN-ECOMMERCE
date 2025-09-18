const usermodel = require("../models/userLoginModel")

const addUser=(req,res)=>{
    try{
       const userData= usermodel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
       })
       userData.save()
       res.status(200).send('Data is Added')
    }
    catch(err){
         res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
    }
}

const getUser= async(req,res)=>{
try{
   const userList=  await usermodel.find()
    res.status(200).send(userList)
}
catch(err){
   res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
}
}
const deleteUser =async(req,res)=>{
   try{
       await usermodel.findByIdAndDelete(req.params.id)
       res.status(200).send('Data is Deleted')
   }
   catch(err){
            res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
           }
}

const loginFun= async(req,res)=>{
   try{
    const user = await usermodel.findOne({
      username:req.body.username,
      password:req.body.password
    })
    if(user){
      res.status(200).send(user)
    }
    else{
      res.status(404).send('User Not Found')
    }
   }
   catch(err){
       res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
   }
}
module.exports={addUser,getUser,deleteUser,loginFun}