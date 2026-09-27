const express = require('express')
const fileRoutes = require('./routes/file.routes')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("backend is running")
})

app.use('/', fileRoutes)

module.exports = app;