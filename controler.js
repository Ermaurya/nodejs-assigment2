const Product=require('./model.product')
exports.getAllProducts=async(req,res)=>{
    const productList=await Product.find()
    res.status(200).json(productList)
    //  res.send("helio user i am x devloper")
}
exports.createProduct=async(req,res)=>{
const data=req.body
let product = new Product(data)
await product.save()
res.status(200).json(product)
}

exports.updateProduct = async (req,res)=>{
    try{
        const id  = req.query.id
        const data = req.body
        const product = await Product.findByIdAndUpdate(id, data, {new : true})
        res.json(product)

        // res.status(200).send("updated successfully")
    }
    catch(err){
        console.log(err.message)
        // res.status(501).send('update not processed')
    }
}
exports.deleteproduct= async(req,res)=>{
    const id =req.query.id
    const result= await Product.deleteOne(id)
    if(result==1){
        res.send("delete")
    }
}