const create = (req,res)=>{
    try {
        let body = req.body;
        const files = req.files;
    

    console.log(body)
    console.log(files)
    
    

    res.status(200).json({
        message : "files uploaded successfully",
    })
    } catch (error) {
        return res.status(501).json({
            message : "internal server error",
        })
    }
}

module.exports= create ;