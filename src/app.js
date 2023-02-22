import express from "express";
import {v4} from "uuid";
import MunColombiaController from "./controllers/munColombia.controller.js";

const app = express();

app.use(express.json())

app.get('/ping',(req,res) => {
    res.send('pong')
})

app.get('/tasks', (req,res)=>{
    res.send([1,2])
})

app.get('/munColombia',async (req,res)=>{
    const consulta = await MunColombiaController.find();
    res.json(consulta)
})

app.post('/tasks',(req,res)=>{
    const {title,description} = req.body;

    if(!title || !description) return res.sendStatus(400);

    res.json({
        id: v4(),
        title,
        description
    })
})

export default app;