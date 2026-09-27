const express = require('express')
const NotesModel = require('./models/notes.model')
const connectDb = require('./config/db')
const notesRoute = require('./routes/notes.route')

const app = express()
connectDb()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("serve pe show ho rha hu")
})

app.use('/notes',notesRoute)

module.exports= app;