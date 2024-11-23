import mongoose from "mongoose";

const TagSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true
    }
})

export const Tag = mongoose.model('Tag',TagSchema)
