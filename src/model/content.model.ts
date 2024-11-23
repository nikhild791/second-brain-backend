import mongoose from "mongoose";

const ContentSchema = new mongoose.Schema({
    link:{
        type:String,
        require:true,
        unique:true
    },
    title:{
        type:String,
    },
    tag:{
        type:[{
            type:mongoose.Types.ObjectId,
            require:true,
            ref:'Tag'
        }]
    },
    userId:{
        type:mongoose.Types.ObjectId,
        require:true,
        ref:'User'
    }
},{timestamps:true})

export const Content = mongoose.model('Content',ContentSchema)