const router = require("express").Router();
const notesData  = require("../../db/db.json");


router.get("/notes", (req, res) => {
    res.json(notesData);
});


module.exports = router;