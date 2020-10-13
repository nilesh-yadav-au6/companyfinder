const mongoose = require("mongoose")
const Schema = mongoose.Schema

const companySchema = new  Schema({
    name:{
        type:String,
        required:true
    },
    cin:{
        type:String,
        required:true
    }  
})

const Company = mongoose.model("company" , companySchema)
module.exports = Company