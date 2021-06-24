const Product = require('../models/product.model')

module.exports = {

    getAll: (req, res) => {  // the getAll is the key, the value is the entire anonymous object
        var mysort = { title: 1 };
        Product.find().sort(mysort) //this is going to use the model connection to the db
                        // 'find' returns an array by default 
                .then((allProducts) => {
                console.log(allProducts);
                res.json(allProducts); // this is the return from the route
            })
            .catch((err) => {
                console.log("error was found in the getAll");
                console.log(err);
                res.json(err);
            });
    },

    create: (req, res) => {  
        console.log(req.body); //whenever creating, it's good to console log
        Product.create(req.body) // no {} as it is already an object, the req (request) is already an object
            .then((newProduct) => {  //this is new 
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) => {
                console.log("error was found in the Create");
                console.log(err);
                res.json(err);
            });
    },

    getOne: (req, res) => {  //need ID to bring one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Product.findById(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((oneProduct) => {  //this is getting one
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => {
                console.log("error was found in the getOne");
                console.log(err);
                res.json(err);
            });
    },

    update: (req, res) => {  //mongodb requires two pieces 1)query, i.e. what to find, 2) 
        console.log(req.params.id);
        console.log(req.body);

        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        }) // no {} as it is already an object, the req (request) is already an object
            .then((updatedProduct) => {  //this is new 
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err) => {
                console.log("error was found in the update");
                console.log(err);
                res.json(err);
            });
    },
    delete: (req, res) => {  //need ID to delete one single record
        console.log(req.params.id); //express gives us params, which will have ID
        
        Product.findByIdAndDelete(req.params.id) // no {} as it is already an object, the req (request) is already an object
            .then((deletedProduct) => {  //this is getting one
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch((err) => {
                console.log("error was found in the delete");
                console.log(err);
                res.json(err);
            });
    },

}