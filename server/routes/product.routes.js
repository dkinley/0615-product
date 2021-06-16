const ProductController = require('../controllers/product.controller');
// the routes needs to pull in the controller

module.exports = (app) => { // need the express server app to
    app.get('/api/product', ProductController.getAll);
    app.post('/api/product', ProductController.create);
    app.get('/api/product/:id', ProductController.getOne);
    // app.put('/api/product/:id', ProductController.update);
    // app.delete('/api/product/:id', ProductController.delete);
} 