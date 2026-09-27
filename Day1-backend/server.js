let http = require ("http")

let server = http.createServer((req,res)=>{
    console.log("server is running")
    res.end("ok maine thumari baat sun li")
})

server.listen(3000,()=>{
    console.log("server is running")
})