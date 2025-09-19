import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const MyContext = createContext()

const ContextProvide = ({ children }) => {
  const url = 'https://e-commerce-backend-gll8.onrender.com'
  

  const [img, setimg] = useState('')
  const [previewimg, setpreviewimg] = useState('')
  const [name, setname] = useState('')
  const [category, setcategory] = useState('')
  const [desc, setdesc] = useState('')
  const [price, setprice] = useState('')

  const [updatimg, setupdatimg] = useState('')
  const [updatepreviewimg, setupdatepreviewimg] = useState('')
  const [updatename, setupdatname] = useState('')
  const [updatcategory, setupdatcategory] = useState('')
  const [updatdesc, setupdatdesc] = useState('')
  const [updatprice, setupdatprice] = useState('')

  const [productData, setproductData] = useState([])
  const [ProducID, setProductID] = useState('')

  const ImageFun = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setimg(reader.result)
        setpreviewimg(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const updateImageFun = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setupdatimg(reader.result)
        setupdatepreviewimg(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const submitFun = async (e) => {
    try {
      e.preventDefault()
      const form = {
        img,
        name,
        category,
        desc,
        price
      }

      // ✅ Removed extra spaces in URL
      await axios.post(`${url}/product/add`, form)

      alert('Product Added Successfully')
      setimg('')
      setpreviewimg('')
      setdesc('')
      setname('')
      setprice('')
    } catch (err) {
      console.log(`Error Name: ${err.name}, Error Message: ${err.message}`)
    }
  }

  const fetchData = async () => {
    try {
      const productlist = await axios.get(`${url}/product/list`)
      setproductData(productlist.data)
    } catch (err) {
      console.log(`Error name: ${err.name}, Error Message: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const deleteFun = async (productID) => {
    try {
      await axios.delete(`${url}/product/delete/${productID}`)
      alert('Product is Deleted Successfully')
    } catch (err) {
      console.log(`Error name: ${err.name}, Error Message: ${err.message}`)
    }
  }

  const updateButtonFun = (productID) => {
    const product = productData.find(a => a._id === productID)
    setupdatname(product.name)
    setupdatcategory(product.category)
    setupdatdesc(product.desc)
    setupdatprice(product.price)
    setupdatimg(product.img)
    setupdatepreviewimg(product.img)
    setProductID(product._id)
  }

  const updateSubmitFun = async (e) => {
    try {
      e.preventDefault()
      const UpdateFormData = {
        img: updatimg,
        desc: updatdesc,
        category: updatcategory,
        name: updatename,
        price: updatprice
      }
      await axios.put(`${url}/product/update/${ProducID}`, UpdateFormData)
      alert('Updated Successfully...')
    } catch (err) {
      console.log(`Error name: ${err.name}, Error Message: ${err.message}`)
    }
  }

  const[userData,setuserData]=useState([])
   
 const  fetchuserData= async()=>{
  try{
     const userList= await axios.get(`${url}/user/getuser`)
     setuserData(userList.data)
  }
  catch(err){
     console.log(`Error name: ${err.name}, Error Message: ${err.message}`)
  }
 }
 useEffect(()=>{
  fetchuserData()
 },[])

 const userDeleteFun=async(userID)=>{
   try{
      await axios.delete(`${url}/user/deleteuser/${userID}`)
       alert('User deleted Successfully')
   }
   catch(err){
     console.log(`Error name: ${err.name}, Error Message: ${err.message}`)
   }
 }
  const MyContextvalue = {
    name, setname,
    category, setcategory,
    desc, setdesc,
    price, setprice,
    ImageFun, previewimg, submitFun,
    productData, deleteFun, updateButtonFun,
    updatename, setupdatname,
    updatdesc, setupdatdesc,
    updatcategory, setupdatcategory,
    updatprice, setupdatprice,
    updateImageFun, updatepreviewimg, updateSubmitFun,userData,userDeleteFun
  }

  return (
    <MyContext.Provider value={MyContextvalue}>
      {children}
    </MyContext.Provider>
  )
}

export default ContextProvide
