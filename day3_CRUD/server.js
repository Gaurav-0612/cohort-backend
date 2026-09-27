const express = require('express')
const app = express()

app.use(express.json())
let user = [];

//write
app.post('/create',(req,res)=>{
    let body = req.body;
    user.push(body)
    res.send('user saved successfully');
})


// read
app.get('/',(req,res)=>{
    res.send(user )
})

//update
app.put('/update/:id',(req,res)=>{
    let {id} = req.params;
    let {name} = req.body;

    let updatedData = user.map((val)=>
        val.id === id ? {...val,name} : val
    )
    res.send(updatedData)
})

//delete
app.delete('/delete/:id',(req,res)=>{
    let { id }= req.params ;
    let userData = user.filter((val)=>  val.id !== id)
    user= userData;
    res.send(userData)
})

app.listen(3000, ()=>{
    console.log("server is running")
})