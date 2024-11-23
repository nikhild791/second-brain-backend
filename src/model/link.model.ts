import mongoose, { mongo } from "mongoose";

const LinkSchema = new mongoose.Schema({
    hash:{
        type:String,
        unique:true,
        require:true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        require:true
    }
})

export const Link = mongoose.model('Link',LinkSchema)