const express = require('express');
const { mongoose } = require('../models');
const User = require("../models/user.model");
const router = express.Router()
const entryHelpers = require('../middlewares/entryHelpers.js')

router.post("/signup", (req, res, next) => 
{   
    entryHelpers.checkDublicatesSignup(req, res)

    
})

module.exports = router