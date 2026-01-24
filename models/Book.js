import mongoose from "mongoose";

// const userSchema= new mongoose.Schema({
//     name:{
//         type:String,
//          required: [true, "name is requied"]},
//     email:{
//         type: String,
//         required: [true, "email is required"],
//         unique: true, 
//         lowercase: true
//     },
//     age:{
//         type: Number,
//         default: 0,

//     },


// }, {timestamps: true});

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true

    },
    password: {type:String, required: true}
}, {timestamps:true})

export default mongoose.model("user", userSchema)