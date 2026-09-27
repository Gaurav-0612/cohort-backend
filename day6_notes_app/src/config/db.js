const mongoose = require('mongoose')

const connectDb = async ()=>{
    try {
       await mongoose.connect(process.env.mongodb_uri);
        console.log("Database connected");
    } catch (error) {
        console.log("error in db is ",error)
    }
}
module.exports = connectDb;