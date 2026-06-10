import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        types: String,
        require: true,
    },
    qualification: {
        types: String,
        require: true,
    },
    salary: {
        types: Number,
        require: true
    },
    experienceInYear: {
        types: Number,
        default: 0,
    },
    workInHospitals: [
        {
            types: mongoose.Schema.Types.ObjectId,
            ref: "Hospital",
        },
    ]
}, { timestamps: true })


export const Doctor = mongoose.model("Doctor", doctorSchema)