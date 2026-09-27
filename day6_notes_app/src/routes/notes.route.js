const express = require('express')
const {createNotesController,getAllNotesController, updateNotesController, deleteNoteController, upadateViaPatchController} = require('../controllers/notes.controller')


const router = express.Router()

router.post('/create', createNotesController)

router.get('/allnotes', getAllNotesController)

router.put('/update/:id', updateNotesController)

router.patch('/single/:id', upadateViaPatchController)

router.delete('/delete/:id', deleteNoteController)

module.exports = router;