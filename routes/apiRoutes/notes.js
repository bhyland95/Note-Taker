const router = require("express").Router();
const fs = require("fs");
const notesData   = require("../../db/db.json");

//returns all notes
router.get("/notes", (req, res) => {
    res.json(notesData);
});

function createNewNote(notes){
    // Converts new JSON Array back to string
    notes = JSON.stringify(notes);
    // Writes String back to db.json
    fs.writeFileSync("./db/db.json", notes, function(err){
        if (err) {
            return console.log(err);
        }
    });
}

//adds note to data
router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notesData.length.toString();

    
    notesData.push(req.body)
    
    // Write notes data to database
    createNewNote(notesData);
    console.log(notesData);

    // returns new note in JSON format.
    res.json(req.body);
});

module.exports = router;