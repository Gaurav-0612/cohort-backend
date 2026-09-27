const express = require('express');
const create = require('../controller/file.controller');
const upload = require('../config/multer');


const router = express.Router();


router.post('/files',upload.array('images',5), create)

module.exports= router;