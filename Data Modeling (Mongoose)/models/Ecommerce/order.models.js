import mongoose from "mongoose"

const productItemsSchema = new mongoose.Schema({
    productID:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        types:Number,
        require:true,
    }
})

const order = new mongoose.Schema({
    orderPrice:{
        types:String,
        require:true,
    },
    customer:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems:{
        types:[productItemsSchema],
    },
    status:{
        types:String,
        enum: ['PANDING','CANCELLED','DELIVERED'],
        default:'PANDING'
    },
    address:{
        types:String,
        require:true,
    }
},{timestamps});

export const Order = mongoose.model("Order" , OrderSchema)