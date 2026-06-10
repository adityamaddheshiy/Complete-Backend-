import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({

    name: {
        types: String,
        require: true,
    },
    addressLine: {
        types: String,
        require: true,
    },
    addressLine: {
        types: String,
        require: true,
    },
    pinCode: {
        types: Number,
        require: true,
    },
    city:{
        types:String,
        require:true,
    },
    State:{
        types:String,
        require:true,
        enm:["Uttar pradesh", "Bihar", "Assam ", "Arunachal pradesh ", "chhattisgarh", "Goa"," Gujarat", "Haryana","Himachal Pradesh", "Jharkand", "Karnataka","Kerla","Madhya Pradesh","Delhi", "Maharashtra"]
    },
    specializedIn:[{
        types:String,
    }]

}, { timestamps: true })


export const Hospital = mongoose.model("Hospital", hospitalSchema);