const express = require('express')
const connectDb = require('./config/db');
const NotesModel = require('./models/note.model');

const app = express();
app.use(express.json())
connectDb();

app.get('/',(req,res)=>{
    res.send("response sent")
})

app.post('/create',async (req,res)=>{
    let {title,description} = req.body;
    let newNotes = await NotesModel.create({
        title,
        description,
    })
    res.send({
        success : true,
        message : "notes created Successfully",
        data : newNotes,
    })
})
module.exports = app;