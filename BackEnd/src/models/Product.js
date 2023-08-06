const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Product name is required!'],
        minLength: [1, 'Product name should be at least 1 character long!'],
        maxLength: [50, 'Product name should be maximum 50 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required!'],
        min: [0.01, 'Price should be minimum 0.01!'],
        max: [999, 'Price cannot be a number higher than 999!']
    },
    imageURL: {
        type: String,
        required: [true, 'imageURL cannot be empty string!']
    }
});

const Product = model('product', productSchema);

module.exports = Product;