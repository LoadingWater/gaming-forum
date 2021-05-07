const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const routes = require('./routes/login.route.js')
const airbnbDAO = require('./dao/airbnbDAO.js')

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
const sampleUir = process.env.ATLAS_SAMPLE_URI;
mongoose.connect(
    sampleUir, 
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, wtimeout:2500 } )
    .catch(err => {
        console.error(err.stack)
        process.exit
    })
    .then(async clientArg => {

        // client from lambda didn't work
        const client = mongoose.connection.getClient();
        const collection = await client.db("sample_airbnb").collection("listingsAndReviews")
        //console.log(client)
        try
        {
            await airbnbDAO.injectDB(collection)
        }
        catch(e)
        {
            console.error(`Airbnb db injection error: ${e}`)
        }
        app.listen(port, () => {
            console.log(`Server is runnig on port: ${port}`);
        })
    });

const connection = mongoose.connection;
connection.once('open', () => 
{
    console.log('MongoDB database connection established successfully');
})




