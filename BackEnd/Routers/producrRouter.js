const express=require('express')
const router=express.Router()
const {addProducts, getProducts, deleteProducts, updateProducts} = require('../Controllers/productControl')
router.post('/add',addProducts)
router.get('/list', getProducts) 
router.delete('/delete/:id',deleteProducts)
router.put('/update/:id' , updateProducts)
module.exports=router