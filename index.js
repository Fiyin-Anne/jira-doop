const express = require('express');
const app = express();

const Routes = require('./src/handlers/index');
const quoteGenerator = require('./src/helpers/generate-random-quote');

require('dotenv').config();

const port = process.env.PORT;

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req, res) => {
    res.status(200).send({
        message: "Welcome to Jira-doop.",
        randomQuote: await quoteGenerator()
    });
})

app.use("/api/", Routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})

module.exports = app;
