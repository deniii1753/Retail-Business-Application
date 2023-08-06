const router = require('express').Router();
const productService = require('../services/productService.js');

router.get('/', async (req, res, next) => {
    try {
        const products = await productService.getProducts();
        res.json(products);

    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const product = await productService.addProduct(req.body);
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
} )

module.exports = router;