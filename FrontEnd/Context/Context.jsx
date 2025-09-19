import React, { createContext, use } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
export const MyContext=createContext()

const Context = ({children}) => {
const url= 'https://e-commerce-backend-gll8.onrender.com'
const navigate= useNavigate()

const[productData,setProductData]=useState([])

const fetchData= async()=>{
  try{
    const producList = await axios.get(`${url}/product/list`)
    setProductData(producList.data)
    
  }
  catch(err){
     console.log(`Error name: ${err.name}, Error Message:${err.message}`)
  }
}
useEffect(()=>{
  fetchData()
},[])

 const [username,setusername]=useState('')
 const [email,setemail]=useState('')
 const [password,setpassword]=useState('')

 const userRegisterFun= async(e)=>{
  try{
     e.preventDefault()
     const userRegisterData={
      username,email,password
     }
      await axios.post(`${url}/user/addUser`, userRegisterData)
     toast.success('User Register Successfully')
     setusername('')
     setemail('')
     setpassword('')
  }
  catch(err){
        console.log(`Error name: ${err.name}, Error Message:${err.message}`)
  }
 }
const[loginUsername,setloginUsername]=useState('')
const[loginPassword,setloginPassword]=useState('')

const userLoginFun= async(e)=>{
  try{
     localStorage.setItem('username',loginUsername)
      e.preventDefault()
     const loginFormData={
        username: loginUsername,
        password:loginPassword
         }
          await axios.post(`${url}/user/login`,loginFormData)
        // alert('Login Successfully...')
        toast.success('Login Successfully...')
        navigate('/home')
        setloginUsername('')
        setloginPassword('')
  }
  catch(err){
        // alert('Invalid  Inputs')
        toast.error('Invalid Inputs')
        console.log(`Error name: ${err.name}, Error Message:${err.message}`)
  } 
 
}
const logoutFun=()=>{
  localStorage.removeItem('username')
  navigate('/')
    toast.error('Logout Successfully')
  
}
    const myContextData={
       productData,username,setusername,email,setemail,password,setpassword,userRegisterFun,loginUsername,setloginUsername,loginPassword,setloginPassword,userLoginFun,navigate,logoutFun
    }
  return (
    <MyContext.Provider value={myContextData}>
       {children}
    </MyContext.Provider>
  )
}

export default Context