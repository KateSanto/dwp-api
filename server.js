// load up the express framework and body-parser helper
const express = require('express');
// const bodyParser = require('body-parser');

// create an instance of express to serve our end points
const app = express();

// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')();

// finally, launch our server on port 3001.
const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});