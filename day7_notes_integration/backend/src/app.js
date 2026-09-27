const express = require('express')
const connectDb = require('./config/db')
const notesRoute = require('./routes/notes.route')
const cors = require('cors')

const app = express()
app.use(cors())
connectDb()
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("serve pe show ho rha hu")
})

app.use('/notes',notesRoute)

module.exports= app;