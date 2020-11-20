const express = require('express');
const config = require('./config');
const server = express();
const router = require('./api');
const cors = require('cors');
const mongoose = require('mongoose');

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/api', router);

mongoose.connect(config.databaseUrl, {
    userNewUrlParser = true,
    useUnifiedTopology: true}).then(() => {
    console.log('Connected to MongoDB database');
});

server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);

});
/**
 * env: environment variables
 * port diff for all people, don't commmit .env file but. env.example
 * nodemon: set up scripts
 * express: setting up servers
 */
