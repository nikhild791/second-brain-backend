import express from "express";
import config from './config'

const app = express();
const port = config.port || 3000;

app.get('/',(req,res)=>{
    res.json({msg:"Hello world"})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})