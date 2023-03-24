const express=require('express')
const router=express.Router()
const controler=require('./controler')
router.get('/getAllProducts',controler.getAllProducts) //get method
router.post('/createProduct',controler.createProduct) //post method
router.post('/deleteproduct',controler.deleteproduct) //post method
router.put('/updateProduct',controler.updateProduct)//update
module.exports=router;