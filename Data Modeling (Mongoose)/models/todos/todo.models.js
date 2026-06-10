import mongoose  from "mongoose";

const todo = new mongoose.Schema({
    username:{
        types: String,
        require:true,
        unique: true,
        length: 10,
    },
    email:{
        types:String,
        require:true,
        unique:true,
        default:false
    },
    userPassword:{
        types:String,
        unique:String,
        length:8
    }
},{timestamps: true})

export default User = mongoose.model("Todo","UserTodo")