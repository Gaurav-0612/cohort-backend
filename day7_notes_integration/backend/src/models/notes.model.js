const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minLength: [20,"Minimum 20 character is required"],
        required: true,
    },
})
const NotesModel = mongoose.model('notes', notesSchema)

module.exports = NotesModel;