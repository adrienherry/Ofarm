const router = require('express').Router();

router.get("/", (req,res) => {
    res.json("Welcome to the homepage")
}); 

module.exports = router;