
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

const path = require('path');
global.include = file => require(path.resolve(file));
global.config = include('config.js');


app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    express.static('/public')
);
// app.use(express.static('/Users/shivkumar/Documents/Git_Projects/nodeJS/pizzabot/styles'));
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a simple route
app.get('/', (req, res) => {
    // res.json({"message": "Hi there! What can I help you with today?"});
    res.sendFile(path.join(__dirname, 'index.html'));
});

//a call should be made to get the options available for the user
//something like '/getOptions'

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});


include('routes/orderRoutes.js')(app);
include('routes/MenuRoutes.js')(app);
