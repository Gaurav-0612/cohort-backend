const { default: mongoose } = require("mongoose");

const connectDb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://gaurav76774792_db_user:Gaurav2300920@cohort-cluster.e1hfpyv.mongodb.net/",);
        console.log("mongodb is connected")
    } catch (error) {
        console.log("error is ", error)
    }
};

module.exports = connectDb;