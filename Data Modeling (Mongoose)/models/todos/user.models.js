import mongoose, { model, Types } from "mongoose"

const userSchema = new mongoose.Schema({

    firstname: {
        types: String,
        require: true,
        lowecase: true,
        unique: true,
    },
    lastname: {
        types: String,
        require: true,
        lowecase: true,

    },
    email: {
        types: String,
        require:true,
        unique:true,
    },
    password:{
        types:String,Number,
        require:true,
        unique:true,
        length:8
    },
    DoB:{
      types:Number,
      require:true,
    },
    gender:{
        types:String,
        require:true,
    } ,

},{timestamps:true})

export default User = mongoose.model("User", userSchema) 