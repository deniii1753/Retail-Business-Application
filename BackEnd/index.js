const express = require('express');
const router = require('./src/router.js');
const errorHandler = require('./src/middlewares/errorHandler.js');
require('dotenv').config();
const { connectDatabase } = require('./config/database.js');
const PORT = process.env.PORT || 3030;

const app = express();

require('./config/express')(app, express);

app.use('/api', router);
app.use(errorHandler);

connectDatabase()
    .then(() => app.listen(PORT, () => console.log(`Database connected successfully! Server listening on port ${PORT}!`)))
    .catch(err => console.error(`An error occured!: ${err.message}`));
