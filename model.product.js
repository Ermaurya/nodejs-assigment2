const mongoose =require('mongoose')
const productScheama =new mongoose.Schema({
    id:{
        type:Number,
        required:true

    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
        
    },
    price:{
        type :Number,
        required:true
    }
    
})
const product=mongoose.model('productTable',productScheama)
module.exports=product