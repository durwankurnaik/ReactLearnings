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

module.exports = router;
