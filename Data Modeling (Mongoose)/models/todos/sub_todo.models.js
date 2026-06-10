import mongoose from "mongoose";

const subTodos = new mongoose.Schema({
    content:{
        types:String,
        unique:true
    },
    complete:{
        types:Boolean,
        require:true,
        default:false,

    },
    createdBY:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
        unique:true,
    }

},{timestamps:true})

export default subTodos = mongoose.model("subTodo" , Todos)