const express = require('express');
const app = express();

const Routes = require('./src/handlers/index');

require('dotenv').config();

const port = process.env.PORT;

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    res.status(200).send({message: "Jira-doop, for all your project management needs."});
})

app.use("/api/", Routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})

module.exports = app;
