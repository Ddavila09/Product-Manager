const ProductController = require('../controllers/product.controller')

module.exports = (app)=>{
    // Read All
    app.get('/api/products', ProductController.allProducts)

    // Read One Product
    app.get('/api/products/:id', ProductController.oneProduct)

    // Create Product
    app.post('/api/products/new', ProductController.createProduct)


    // Update One
    app.put('/api/products/update/:id', ProductController.updateProduct)

    // Delete Product
    app.delete('/api/products/delete/:id', ProductController.deleteProduct)


}