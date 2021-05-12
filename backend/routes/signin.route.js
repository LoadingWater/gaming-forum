const express = require('express');
const { mongoose } = require('../models');
const User = require("../models/user.model");
const router = express.Router()
const entryHelpers = require('../middlewares/entryHelpers')

router.post("/signin", (req, res) => 
{   
    var {username, email, password } = req.query

    console.log("Username: " + username + " email: " + email + " password: " + password)
    User.findOne( {username: username, email: email} )
    .exec((err, user) => 
    {
      if (err) 
      {
        res.status(500).send({ message: err });
        return;
      }
      if (!user)
      {
        entryHelpers.checkDublicatesSignin(req, res)
      }
      else
      {
        if (password != user.password)
        {
          return res.status(401).send("Invalid Password!");
        }
      
        res.status(200).send({
          id: user._id,
          username: user.username,
          email: user.email
        });
      }
    });
})

module.exports = router