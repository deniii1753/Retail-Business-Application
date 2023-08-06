const express = require('express');
require('dotenv').config();
const { connectDatabase } = require('./config/database.js');
const PORT = process.env.PORT || 3030;

const app = express();

connectDatabase()
    .then(() => app.listen(PORT, () => console.log(`Database connected successfully! Server listening on port ${PORT}!`)))
    .catch(err => console.error(`An error occured!: ${err.message}`));
