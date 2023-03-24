const express =require('express')
const mongoose=require('mongoose')
const router =require('./routes')

const app=express()
mongoose.connect('mongodb+srv://csshubhammaurya:w5iI8dpVyxoYnanP@cluster0.lcuq1sb.mongodb.net/test')
.then(()=>console.log('database is connected....!'))
.catch((error)=>console.log(error))
app.use(express.json())
app.use('/product',router)
const port=3000
app.listen(port,()=>{
    console.log("server start port number 3000")
})