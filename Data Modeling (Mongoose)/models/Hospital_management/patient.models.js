import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({

    name: {
        types: String,
        require: true,
    },
    age: {
        types: Number,
        require: true,
    },
    diagonsWith: {
        types: String,
        require: true,
    },
    gender: {
        types: String,
        enum: ['M', 'F', 'O']
    },
    bloodGroup: {
        types: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    address: {
        types: String,
        require: true,
    },
    patientRecord:{
        types:mongoose.Schema.Types.ObjectId,
        require:true,
    },
    admittedIn:{
        types:mongoose.Schema.Types.ObjectId,
        require:true,
    },
    
}, { timestamps: true })

export const Patient = mongoose.model("Patient", patientSchema)