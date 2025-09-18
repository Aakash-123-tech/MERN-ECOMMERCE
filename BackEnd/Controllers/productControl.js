const productModel = require("../models/userModel")

const addProducts= async(req,res)=>{
        try{
            const productDatas= productModel({
            img: req.body.img , //key -img:req.body.img - value 
            name: req.body.name ,
            category: req.body.category,
            desc: req.body.desc ,
            price: req.body.price,
        })
        await productDatas.save()
        res.status(200).send('Data is Added')
   }
        catch(err){
            res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
        }
}
const getProducts= async( req,res)=>{
try{
    const productList= await productModel.find()
    res.status(200).send(productList)
}
catch(err){
   res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
}
}
const deleteProducts= async(req,res)=>{
    try{
     await productModel.findByIdAndDelete(req.params.id)
     res.status(200).send('Data is Deleted')
    }
    catch{
        res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
    }
}
const updateProducts= async(req,res)=>{
    try{
     const UpdateData= await productModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     res.status(200).send('Data is Updated')
    }
    catch(err){
         res.status(404).send(`Error name: ${err.name} and Error Message : ${err.message}`)
    }
}
module.exports={addProducts, getProducts,deleteProducts,updateProducts}