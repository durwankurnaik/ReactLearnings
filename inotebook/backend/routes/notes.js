const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchuser');


// ROUTE 1: Get all the notes of the logged in user using GET: "/api/notes" Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }

})

// ROUTE 2: Add a new note using POST: "/api/addnotes" Login required
router.post('/addnotes', fetchuser, [
    body('title', 'Title must be atleast 3 characters long').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters long').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();

        res.json(savedNote);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
})

// ROUTE 3: Update an existing note using PUT: "/api/updatenote" Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;

    try {
        // Creating a newNote object
        const newNote = {};

        //  If these fields exist, then add them to the newNotes object.
        if (title) { newNote.title = title; }
        if (description) { newNote.description = description; }
        if (tag) { newNote.tag = tag; }

        // Finding the note to be updated and update it
        let note = await Note.findById(req.params.id);

        // Checks if the note exist
        if (!note) {
            return res.status(404).send("Note not found");
        }

        // Checks if the note belong to the logged in user
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed to do this operation");
        }

        // If all the above conditions are true, then note will get updated
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note }); // Sending the response (updated note)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
})

// ROUTE 4: Delete an existing note using DELETE: "/api/deletenote" Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        // Finding the note to be deleted and delete it
        let note = await Note.findById(req.params.id);

        // Checks if the note exist
        if (!note) {
            return res.status(404).send("Note not found");
        }

        // Checks if the note belong to the logged in user
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("You are not allowed to do this operation");
        }

        // If all the above conditions are true, then note will get deleted
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note has been deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error.");
    }
})

module.exports = router;
