exports.addProduct = (product) => {
    const newProduct = new Product({
        name: product.name,
        price: product.price,
        imageURL: product.imageURL
    });

    return newProduct.save();
}

