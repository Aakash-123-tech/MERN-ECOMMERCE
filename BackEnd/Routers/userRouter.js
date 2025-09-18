const express=require('express')
const {addUser, getUser, deleteUser, loginFun} = require('../Controllers/userController')
const userRouter=express.Router()
userRouter.post('/addUser',addUser)
userRouter.get('/getuser', getUser)
userRouter.delete('/deleteuser/:id',deleteUser)
userRouter.post('/login',loginFun)
module.exports=userRouter

