const express = require('express')
const fileRoutes = require('./routes/file.Routes')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("backend is running")
})

app.use('/file', fileRoutes)

module.exports = app ;