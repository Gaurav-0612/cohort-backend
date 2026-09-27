const multer = require('multer')

const localStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    },
})

const serverStorage = multer.memoryStorage()

const upload = multer({storage : serverStorage});

module.exports = upload;