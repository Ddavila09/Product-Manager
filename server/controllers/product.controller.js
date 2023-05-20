const Product = require("../models/product.model")

// Create Product
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => { res.json({ results: newProduct }) })
        .catch(err => res.status(400).json(err))
}

// Read All
module.exports.allProducts = (req, res) => {
    Product.find()
        .then((allProducts) => { res.json({ results: allProducts }) })
        .catch(err => res.json({ err: err }))
}

// Read One Product
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => { res.json({ results: product }) })
        .catch(err => res.json({ err: err }))
}

// Update One
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedProduct => { res.json({ results: updatedProduct }) })
        .catch(err => res.json({ err: err }))
}

// Delete Song
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => { res.json({ results: deletedProduct }) })
}
