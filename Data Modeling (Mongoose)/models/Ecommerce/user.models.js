import mongoose from "mongoose";

const user = new mongoose.Schema({
    userName: {
        types:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    userEmail:{
        types:String,
        require:true,
        unique:true,
        lowercase:true,
    },
    userPassword:{
        types:String,
        require:true,
    }
},{timestamps:true});

export const User = mongoose.model("User", UserSchema)