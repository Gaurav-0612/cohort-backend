const NotesModel = require("../models/notes.model");

const createNotesController = async (req,res)=>{
    try {
        let {title,description} = req.body;
        let newNotes = await NotesModel.create({
            title,
            description,
        })
        return res.status(201).json({
            message : "notes created sucessfully",
            data : newNotes,
        })
    } catch (error) {
        console.log("error in creation is ",error)
    }
}

const getAllNotesController = async (req,res)=>{
    try {
        let allnotes = await NotesModel.find();
        res.status(200).json({
            message : "notes fetched successfully",
            data : allnotes,
        })
    } catch (error) {
        console.log("error in fetching all notes" , error )
    }
}

const updateNotesController = async (req,res)=>{
    try {
        let noteid = req.params.id;
        let body = req.body;

        let updatedNotes = await NotesModel.findByIdAndUpdate(noteid,body,{new:true,})

        res.status(200).json({
            message : "Notes updated successfully",
            body : updatedNotes,

        })
    } catch (error) {
        console.log("error in updation ", error)
    } 
}
const deleteNoteController = async (req,res)=>{
    try {
        let noteId = req.params.id;
        let deletedNotes=await NotesModel.findByIdAndDelete(noteId)
        res.status(201).json({
            message : 'Notes deleted successfully',
            data : deletedNotes,
        })
    } catch (error) {
        return res.status(500).json({
            message : "internal server error"
        })
    }
}
const upadateViaPatchController = async (req,res)=>{
    try {
        let noteId = req.params.id;
        let body = req.body;

        let singleupdatedNotes=await NotesModel.findByIdAndUpdate(noteId,body,{new:true,})

        res.status(200).json({
            message : 'Notes updated successfully',
            body : singleupdatedNotes,
        })
    } catch (error) {
        return res.status(500).json({
            message : "internal server error"
        })
    }
}
module.exports = {createNotesController,getAllNotesController,updateNotesController,deleteNoteController,upadateViaPatchController};