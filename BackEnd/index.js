const express = require('express');
const mongoose = require('mongoose');

const PORT = 3030;

const app = express();

mongoose.connect('mongodb://127.0.01:27017/RetailBusiness', )
    .then(() => app.listen(PORT, () => console.log(`Database connected successfully! Server listening on port ${PORT}!`)))
    .catch(err => console.error(`AN error occured!: ${err.message}`));
