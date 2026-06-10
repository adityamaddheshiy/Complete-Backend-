import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        types:String,
        require: true
    },
    description:{
        types : String,
        require :true
    },
    price:{
        types:Number,
        default: 0,
        require:true,
    },
    stock:{
        types:Number,
        default:0,
    },
    productImage:{
        types:String,
    },

    Category:{
        types: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        require:true,
    },
    owner:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    }

},{timestamps: true})

export const Product = mongoose.model("Product", productSchema)