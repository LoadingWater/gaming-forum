const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
require ('dotenv').config();
const port = process.env.PORT || PORT;
const app = express();
const db = require('./models')
const User = db.user

//Routes
const login = require('./routes/login.routes.js')
const auth = require('./routes/auth.routes.js')
const user = require('./routes/user.routes.js');
//End of routes


app.use(login)
app.use(auth)
app.use(user)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("*", (req, res) => {
    res.status(404).json({error: "Not found"})
})

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri, 
    { useNewUrlParser: true, useUnifiedTopology: true, wtimeout:2500 } )
    .catch(err => {
        console.error(err.stack)
        process.exit
    })
    .then(async clientArg => {
        initial()
        app.listen(port, () => {
            console.log(`Server is runnig on port: ${port}`);
        })
    });

const connection = mongoose.connection;
connection.once('open', () => 
{
    console.log('MongoDB database connection established successfully');
})


function initial() {
    User.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new User({
            username: "firstUser",
            email: "testFirst@gmail.com",
            password: "firstUser"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'first user' to users collection");
        });
        new User({
            username: "secondUser",
            email: "testSecond@gmail.com",
            password: "secondUser"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log("added 'second user' to users collection");
          });
        }
    });
  }