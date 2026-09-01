let mongoose= require("mongoose")

let userSchena= new mongoose.Schema({
name: String, 
email:String, 
password:String
})

let User= mongoose.model("user", userSchena)
module.exports = User