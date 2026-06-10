import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        types:String,
        require:true,
    }
},{timestamps: true});



export const Category = mongoose.model("Category", categorySchema)