import express from 'express';
import cors from 'cors'
import {screenShare} from './routes/index.js'
import dotenv from "dotenv";
dotenv.config();
const app=express();


app.use(cors());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Region","*");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept,Authorization");

    next();
})
app.use(express.json({limit : '16kb'}));

app.use(express.urlencoded({extended: true, limit :'16kb'}));
app.use("/screen-share",screenShare);



export {
    app
}
