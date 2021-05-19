const db = require("../models");
const User = db.user;

checkDublicatesSignup = (req, res, next) => 
{
  // Username
  User.findOne({username: req.query.username})
  .exec((err, user) => 
  {
    if (err) 
    {
      res.status(500).send({ message: err });
      return;
    }
    if (user) 
    {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    else
    {
      // Email
      User.findOne({email: req.query.email})
      .exec((err, user) => 
      {
        if (err) 
        {
          res.status(500).send({ message: err });
          return;
        }
        if (user) 
        {
          res.status(400).send({ message: "Failed! Email is already in use!" });
          return;
        }
        else
        {
          addUserToDB(req, res)
        }
        next();
      }); 
    }
  });
};

checkDublicatesSignin = (req, res) => 
{
  // Username
  User.findOne({username: req.query.username})
  .exec((err, user) => 
  {
      if (err) 
      {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) 
      {
        res.status(400).send({ message: "Username doesn't exist." });
        return;
      }
      // Email
      User.findOne({email: req.query.email})
      .exec((err, user) => 
      {
        if (err) 
        {
          res.status(500).send({ message: err });
          return;
        }
        if (!user) 
        {
          res.status(400).send({ message: "Email doesn't exist." });
          return;
        }
      })
  })
};

addUserToDB = (req, res) => 
{
  new User({username: req.query.username, email: req.query.email, password: req.query.password})
  .save(err =>
    {
      if (err) 
      {
        console.log("error", err);
        res.status(500).send(err.message)
      }
      console.log("Added user to db.");
      res.status(201).send("Added user " + req.query.username + " to db.")
    });
    
};

const enterHelpers = 
{
  checkDublicatesSignin,
  checkDublicatesSignup,
  addUserToDB
};

module.exports = enterHelpers;