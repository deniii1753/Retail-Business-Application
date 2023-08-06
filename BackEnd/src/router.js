const router = require('express').Router();

const productsController = require('./controllers/productsController.js');

router.use('/products', productsController);

module.exports = router;