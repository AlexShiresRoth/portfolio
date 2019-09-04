const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("index"));
router.get('/*', (req,res) => {
    try{
        res.redirect('/');
    }catch(error){
        if(error){
            console.log(error.message);
            res.status(500).json({ msg: error.message})
        }
    }
})

module.exports = router;
