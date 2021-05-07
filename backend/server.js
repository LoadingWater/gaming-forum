const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const routes = require('./routes/login.route.js')

require ('dotenv').config();

const app = express();
const port = process.env.PORT || PORT;

app.use(cors());
app.use(express.json());

app.use(routes)
app.use("*", (req, res) => {
    res.status(404).json({error: "Not found"})
})

const uri = process.env.ATLAS_URI;
mongoose.connect(
    uri, 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, wtimeout:2500 } )
    .catch(err => {
        console.error(err.stack)
        process.exit
    })
    .then(async => {
        app.listen(port, () => {
            console.log(`Server is runnig on port: ${port}`);
        })
    });

const connection = mongoose.connection;
connection.once('open', () => 
{
    console.log('MongoDB database connection established successfully');
})

