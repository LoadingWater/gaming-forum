const express = require('express');
const { mongoose } = require('../models');
const User = require("../models/user.model");
const router = express.Router()
const entryHelpers = require('../middlewares/entryHelpers.js')

router.post("/signup", (req, res, next) => 
{   
    if(entryHelpers.checkDublicatesSignup(req, res, next))
    {
        console.log("Free nickname.")
    }
    
})

module.exports = router