const express= require('express')
const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const app=express()
mongoose.connect('mongodb://localhost:27017/startup_log')

const UserSchema =new mongoose.Schema({
    firstName :String,
    lastName :String
})

const UserModel = mongoose.model("users" , UserSchema)

app.checkout("/getUsers",(req,res) =>{
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
    })
})


app.listen(3001,()=>{
    console.log("Server is running successfully...!")
})